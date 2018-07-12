// Compiled using marko@4.11.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ryanleeder.me$1.0.0/views/components/portfolio.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  const _ = require('lodash'),
        request = require('request'),
  	      regexWebUrl = require('regex-weburl'),
        cheerio = require('cheerio'),
        porfolio = require('../../config/porfolio.json');
  
  function validatePortfolioLink(link) {
    var re = new RegExp(regexWebUrl);
    var isValid = re.test(link);
    if (isValid) {
      request(link, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           var $ = cheerio.load(body);
  
        }
      });
    }
    return false;
  }

  out.w("<p>Here's a small selection of the projects I've worked on both past and present, for clients ranging from small business to fortune 500 companies.</p><p>Mostly developed in ASP.NET, C#, JQuery and SQL Server. Enhanced with a dash of Windows Azure and Amazon cloud platform development. Finally garnished with a sprinkle of Shopify and WordPress for good measure!</p><p>The items above reflect just a small sample of the projects I have worked on. If you are looking for more samples of a specific type, please contact me.</p>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/ryanleeder.me$1.0.0/views/components/portfolio.marko"
  };
