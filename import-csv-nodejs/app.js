
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var session=require('express-session');
var flash=require('connect-flash');
var mongoose=require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://akhilesh_jain:jain2000@cluster0.qoy1o.mongodb.net/<dbemployee?retryWrites=true&w=majority', { useMongoClient: true });
require("./models/employee");
var app = express();

app.use(session({ cookie: { maxAge: 60000 }, 
  secret: 'woot',
  resave: false, 
  saveUninitialized: false}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
