const ignoreFavicon = function ignoreFavicon(app) {
  app.get('/favicon.ico', (req, res) => res.status(204));
};

module.exports = ignoreFavicon;
