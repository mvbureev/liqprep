const testRouter = require('./testRoutes');

function routes(app) {
  app.use('/api/test', testRouter);
}

module.exports = routes;
