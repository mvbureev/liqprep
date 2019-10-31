const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// const logger = require('./modules/core/logger');
const routes = require('./routes');
const mongoConnection = require('./modules/core/db');
const parseResponse = require('./modules/core/parseResponse');
const ignoreFavicon = require('./modules/core/ignoreFavicon');
const errorHandling = require('./modules/core/errorHandling');

const app = express();

app.disable('x-powered-by');
// logger(app);
mongoConnection();
parseResponse(app);
cors(app);
ignoreFavicon(app);
routes(app);
errorHandling(app);
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
