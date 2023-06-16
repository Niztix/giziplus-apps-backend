const express = require('express');
const bodyParser = require('body-parser');

const tourRoutes = require('./routes/tourRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/', tourRoutes);

module.exports = app;
