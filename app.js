var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var connectdb = require('./config/db');
const dotenv = require("dotenv");
const { errorHandler } = require('./middleware/error');
const fileUpload = require("express-fileupload");

var usersRouter = require('./routes/user.route');
var authRouter = require('./routes/auth.route');
var productRouter = require('./routes/product.route');
var reviewRouter = require('./routes/review.route');
var categoryRouter = require('./routes/category.route');
var orderRouter = require('./routes/order.routes');

var app = express();

//configure env
dotenv.config()
//connecting to database
connectdb();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(unknownEndpoints);
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(errorHandler);


app.use('/api/user', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/product',productRouter);
app.use('/api/review',reviewRouter);
app.use('/api/category',categoryRouter);
app.use('/api/order',orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  //close the server
  server.close(() => process.exit(1));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(`An error has occured:- ${err.message}`);
});

module.exports = app;
