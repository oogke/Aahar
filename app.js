var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose= require("mongoose");
const session=require('express-session');
const bcrypt= require('bcryptjs');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter=require('./routes/admin');
var searchRouter=require('./routes/search');
const Product = require('./models/productschema');
const productsRouter = require('./routes/product');




mongoose.connect('mongodb+srv://three:easy@cluster0.alz4tam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected'))
  .catch((err) => console.error('Error:', err));
var app = express();
//Database Connection



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRouter);
app.use('/product',productsRouter);
app.use('/search',searchRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
