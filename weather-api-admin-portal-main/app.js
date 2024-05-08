var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var advancedRouter = require('./routes/advanced');
var mapRouter = require('./routes/map');
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');

const session = require('express-session')
const sequelize = require('./db');
const User = require('./models/User');
const WeatherApi = require('./models/WeatherApi');
const ApiController = require('./controllers/ApiController')
const bodyParser = require('body-parser')

var app = express();

// Body parser for admin portal
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(express.static('public'));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'weather123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use('/', indexRouter);
app.use('/advanced', advancedRouter);
app.use('/map', mapRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// populate the databases
async function setup() {

  const admin = await User.create({
    username: "admin",
    password: "1234"
  })

  const api1 = await WeatherApi.create(
    {
      id: "VisualCrossing",
      script_simple: "../public/javascripts/vsSimple.js",
      script_advanced: "../public/javascripts/vsAdvanced.js"
    }
  )
  const api2 = await WeatherApi.create(
    {
      id: "OpenMeteo",
      script_simple: "../public/javascripts/wSimple.js",
      script_advanced: "../public/javascripts/wAdvanced.js"
    }
  )

  ApiController.SetApi("VisualCrossing")
  ApiController.setLocation(98201)
}

sequelize.sync({ force: true }).then(() => {
  console.log("Sequelize Sync Completed...");
  setup().then(() => console.log("db setup complete"))
})

module.exports = app;
