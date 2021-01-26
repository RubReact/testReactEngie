const agencyRoutes = require('./agency');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });
  agencyRoutes(app, fs);
};

module.exports = appRouter;
