var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();
var mustacheExpress = require('mustache-express');

var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'dist/uploads');
  },
  filename: function (req, file, cb) {
    var extension = 'jpg';
    // there are only two types
    if(file.mimetype === 'image/png') {
      extension = 'png';
    }
    var key = Date.now();
    cb(null, key + '.' + extension);
  }
});

var upload = multer({
  storage: storage/*,
  fileFilter: function(req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }*/
});

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.post('/upload', upload.single('bike_photo'), function (req, res, next) {
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({ tmp_path: req.file.path }));
});

app.post('/save_bike', function (req, res, next) {
  console.log(req.body);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({ success: true }));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
