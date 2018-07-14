const express = require('express'),
      http = require('http'),
      path = require('path'),
      markoExpress = require("marko/express"),
      compression = require('compression'),
      mime = require("mime"),
      bodyParser = require('body-parser'),
      favicon = require('express-favicon'),
      methodOverride = require('method-override'),
      serveStatic = require('serve-static'),
      helmet = require('helmet'),
      morgan = require('morgan');

require('marko/node-require'); // Allow Node.js to require and load `.marko` files

const nconf = require('./config/index').initialize();

var port = nconf.get('PORT');
var app = express();
app.use(helmet());
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(markoExpress()); //enable res.marko(template, data)
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json({limit: '1mb'}));
app.use(methodOverride());
app.use(compression());
app.use(morgan('short', {
  skip: function (req, res) {
    var regex = /^\/?[\w\/?.&-=]+\/?((\bimg\b)|(\bcss\b)|(\bjs\b))\/[\w\/?.%&-=]+$/;
    if (regex.test(req.url)) {
        return true;
    }
  }
}));

require('./routes/home')(app, nconf);
require('./routes/error')(app);

(async function() {
  const portfolio = require('./config/portfolio');
  portfolio.initialize().then(() => {
    app.listen(port, function(err) {
      if (err) {
          throw err;
      }
      console.log('Listening on port %d', port);
    });
  });
})();
