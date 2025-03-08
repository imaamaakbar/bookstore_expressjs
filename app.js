var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
const formData = require('express-form-data');


var logger = require('morgan');

var apiRouter = require('./routes/api');

var app = express();
app.use(formData.parse());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({ extended: false }));

app.use('/api', apiRouter);
// app.use('/users', usersRouter);

module.exports = app;
