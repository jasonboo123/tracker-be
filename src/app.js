const express = require("express");

const app = express();
app.use(express.json())
const testRoutes = require('./routes/test');
app.use('/test', testRoutes);
module.exports = app;