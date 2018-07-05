var nconf = require('nconf');
var path = require('path');

exports.initialize = function() {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  nconf.argv().env().use('memory');
  var env = nconf.get('NODE_ENV');
  if (env !== 'production') {
    nconf.file(path.join(__dirname, 'settings.json'));
  }
  return nconf;
};
