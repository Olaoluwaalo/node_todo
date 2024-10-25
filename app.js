const express = require('express');
const bodyParser = require('body-parser');
const todoRouter= require('./routes/todo_route');
const router = require('./routes/user_routes');
const app = express();
app.use(bodyParser.json());

app.use('/', router);
app.use('/',todoRouter);
module.exports = app;