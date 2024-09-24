const express = require('express');
const app = express();
const routerMortos = require('./routes/routerMortos');

app.use(express.json());
app.use("./funeraria", routerMortos);

module.exports = app;