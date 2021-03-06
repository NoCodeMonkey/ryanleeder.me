const _ = require('lodash'),
      {get} = require('underscore.get'),
      fs = require('fs-extra'),
      path = require('path'),
      sanitize = require("sanitize-filename"),
      djv = require('djv'),
      puppeteer = require('puppeteer'),
      jimp = require('jimp'),
      portfolioJsonSchema = require('../config/portfolio-schema.json'),
      portfolioJson = require('../config/portfolio.json'),
      portfolioDirectory = path.join(__dirname, '../public/img/portfolio'),
      imageRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;

function validateConfig() {
  let env = new djv();
  env.addSchema('portfolio', portfolioJsonSchema);
  let errors = env.validate('portfolio', _.extend(true, {}, portfolioJson));
  if (errors && errors.length) {
    throw new Error("Portfolio local JSON file failed validation.");
  }
}

async function checkDirectory(directory) {
  try {
    const stat = await fs.stat(directory);
    if (!stat.isDirectory()) {
      throw new Error(`Path is not a directory '${directory}'`);
    }
  }
  catch (err) {
    if (err && (err.errno === 34 || err.errno === -2 || err.code === 'ENOENT')) {
      await fs.mkdir(directory);
    } else {
      throw err;
    }
  }
}

function generatePortfolioDirectory(portfolio) {
  var sanitizedName = sanitize(portfolio.title).replace(/[^a-zA-Z]/g, "").toLowerCase();
  return path.join(portfolioDirectory, sanitizedName);
}

function waitLoad(page, loadTimeout) {
  return new Promise(resolve => {
    const timeout = setTimeout(resolve, loadTimeout);
    page.on('load', () => {
      clearTimeout(timeout);
      resolve();
    })
  })
}

async function checkPortfolioItems() {
  var promises = portfolioJson.map(async portfolio => {
    var directory = get(portfolio, 'directory.path', null);
    if (!directory) {
      directory = generatePortfolioDirectory(portfolio);
      portfolio = _.merge({ directory: { path: directory } }, portfolio);
    }
    await checkDirectory(portfolio.directory.path);
    const files = await fs.readdir(portfolio.directory.path);
    const images = files.filter(file => imageRegex.test(file));
    portfolio = _.merge({ directory: { files: images } }, portfolio);
    return portfolio;
  });
  var portfolios = await Promise.all(promises);
  var portfoliosToScreenshot = _.filter(portfolios, (portfolio) => {
    var url = get(portfolio, 'website.url', null);
    var files = get(portfolio, 'directory.files', null);
    return (url && (!files || files && files.length === 0));
  });
  if (portfoliosToScreenshot && portfoliosToScreenshot.length) {
    await screenshotWebsites(portfoliosToScreenshot);
    portfoliosToScreenshot.forEach(async (portfolio) => {
      const files = await fs.readdir(portfolio.directory.path);
      const images = files.filter(file => imageRegex.test(file));
      let index = portfolios.findIndex((p => p.title === portfolio.title));
      portfolios[index] = _.merge({ directory: { files: images } }, portfolio);
    });
  }
  const config = path.join(__dirname, '../config/portfolio.json');
  const json = JSON.stringify(portfolios, null, 2);
  await fs.ensureFile(config);
  await fs.writeFile(config, json, 'utf8');
}

async function screenshotWebsites(portfolios) {
  var browserArgs = {args: ["--no-sandbox", "--disable-setuid-sandbox"], ignoreHTTPSErrors: true};
  const browser = await puppeteer.launch(browserArgs);
  var promises = portfolios.map(async portfolio => {
    let page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1280});
    await page.goto(portfolio.website.url);
    await waitLoad(page, 300);
    var buffer = await page.screenshot();
    var sizes  = {
      xsmall: [320, 214],
      small: [576, 384],
      tablet: [768, 512],
      desktop: [1024, 682],
      fullsize: [1920, 1280]
    };
    for (const size of Object.keys(sizes)) {
      var image = await jimp.read(buffer);
      await image.resize(sizes[size][0], sizes[size][1], jimp.RESIZE_BEZIER);
      await image.quality(82);
      await image.write(path.join(portfolio.directory.path, `${size}-${sizes[size][0]}x${sizes[size][1]}.png`));
    }
    await page.close();
  });
  await Promise.all(promises);
  await browser.close();
}

(async function() {
  try {
    validateConfig();
    await checkDirectory(portfolioDirectory);
    await checkPortfolioItems();
    console.log("Portfolio local JSON file initialization succeeded.");
  } catch(e) {
    console.log("Portfolio local JSON file initialization failed.");
    throw e;
  };
})();
