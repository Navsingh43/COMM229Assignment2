/* File Name: app.js
   Name: Navjot Singh
   Student ID: 301157391
   Date:3-June-2022
*/

/*The installed third party packages */
let  createError = require('http-errors');
let  express = require('express');
let  path = require('path');
let  cookieParser = require('cookie-parser');
let  logger = require('morgan');

//modules for authentication
let session=require('express-session');
let passport=require('passport');

let passportLocal= require('passport-local');
let localStrategy= passportLocal.Strategy;
let flash= require('connect-flash');

//database setup

let mongoose=require('mongoose');
let DB= require('./db'); //DB configurations

//point mongoose to DB URI
mongoose.connect(DB.URI,{useNewUrlParser:true, useUnifiedTopology:true});

let mongoDB= mongoose.connection;

mongoDB.on('error', console.error.bind(console,"Connection ERROR"));
mongoDB.once('open',()=>{
  console.log('Connected to MongoDB...');
})

let  indexRouter = require('../routes/index');   /*Routing index.js */
let  usersRouter = require('../routes/users');   /*Routing index.js */
let contactsRouter = require('../routes/contact');

/*Instantiates express application */
let  app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views')); /*Joining views into our search path */
app.set('view engine', 'ejs');   /*Specify ejs as view engine */

/*Additional activations*/
app.use(logger('dev'));    /*To track the dev systems that are logging */
app.use(express.json());     /*Method to recognise json file*/
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  /*Loading a cookie parser middleware */
app.use(express.static(path.join(__dirname, '../../public')));  /*Loading middleware for static files*/
app.use(express.static(path.join(__dirname,'../../node_modules')));

//setup express session
app.use(session({
  secret:"SomeSecret",
  saveUninitialized:false,
  resave:false
}));

//initialize flash
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//passport user configuration

// create a user Model Instance
let userModel= require('../models/user');
let User=userModel.User;

// implement a user Authentication Strategy
passport.use(User.createStrategy());

//serialize and deserialize user info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact-list',contactsRouter);

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
  res.render('error',{ title: 'Error'});
});

module.exports = app;
