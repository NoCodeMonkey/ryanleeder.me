module.exports = function(app) {
  const marko = require('marko'),
      mapErrorStatusToView = {
        404: '404.marko',
        500: '500.marko'
      };

  app.use(function (req, res, next) {
      var err = new Error('Page Not Found');
      err.status = 404;
      next(err);
  });

  app.use(function(err, req, res, next) {
    var status = err.status || 500;
    template = require('../views/pages/' + mapErrorStatusToView[status])
    res.status(status);
    res.marko(template, {});
  });
}
