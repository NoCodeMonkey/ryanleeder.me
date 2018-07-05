const nconf = require('nconf'),
      path = require('path');

exports.initialize = function() {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  process.env.PORT = process.env.PORT || 8080;
  nconf.argv().env('__').use('memory');
  var env = nconf.get('NODE_ENV');
  if (env !== 'production') {
    nconf.file(path.join(__dirname, 'settings.json'));
  }
  return nconf;
};
