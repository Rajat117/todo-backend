const createError = require('http-errors');

module.exports = app => {
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // render the error page
    res.status(err.status || 500);
    return res.json({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    });
  });
};
