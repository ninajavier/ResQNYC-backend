const express = require('express');
const dataController = require("./controllers/data.controller.js");
const app = express();

app.use('/data', dataController);

app.get('/', (req, res) => {
  res.send('ResQNYC');
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app;