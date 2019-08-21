const express = require('express');
const dotenv = require('dotenv');

const indexRouter = require('./routes');
dotenv.config();

let app = express();

require('./middleware/misc')(app);

const { apiPrefix, apiVersion } = process.env;

app.use(`/${apiPrefix}/${apiVersion}`, indexRouter);

require('./middleware/exception')(app);

module.exports = app;
