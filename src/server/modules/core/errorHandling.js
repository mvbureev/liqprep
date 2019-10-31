const errorHandling = function errorHandling(app) {
  app.use((req, res, next) => res.status(404).json('API not found')); // eslint-disable-line no-unused-vars

  app.use((error, req, res, next) => {
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};
    // eslint-disable-line no-unused-vars
    res.status(error.status || 500);
    res.render('error');
    res.json(error.message);
  });
};

module.exports = errorHandling;
