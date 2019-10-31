const testRouter = require('./testRoutes');

function routes(app) {
  app.use('/', testRouter);
  app.use('/test', testRouter);
}

module.exports = routes;
