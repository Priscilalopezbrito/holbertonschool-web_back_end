const express = require('express');
const router = require('./routes');

const app = express();

app.listen(1245);
// Use the imported routes
app.use('/', router);

module.exports = app;
