const express = require('express');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
// const multer = require('multer');

const routes = require('./routes');
const mongoConnection = require('./modules/core/db');

mongoConnection();

const app = express();

app.use((req, res, next) => {
  res.header('Accept', 'application/json');
  res.header('X-Requested-With', 'XMLHttpRequest');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
});
app.disable('x-powered-by');

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse multipart/form-data
// app.use(multer());

app.use(cookieParser());

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'ibureyLiqprep',
}));

routes(app);
app.use(errorHandler());
app.use(logger('dev'));
app.use(methodOverride());
app.use(cors());

app.get('/favicon.ico', (req, res) => res.status(204));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
