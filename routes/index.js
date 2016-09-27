var express = require('express');
var router = express.Router();
var app = express();
var db = require('../pg-promise/db').db;

var title = "About My Bike";

var getJSON = require('../express-helpers/getJSON').getJSON;

var options = {
    host: 'localhost',
    port: 3030,
    path: '/bikes/all',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
};

/* GET home page. */
router.get('/', function(req, res, next) {

  getJSON(options, function(statusCode, result) {
    // I could work with the result html/json here.  I could also just return it
    console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
    //res.statusCode = statusCode;
    //res.send(result);
  });

  db.any("select * from bike", [true])
    .then(function (data) {
        res.render('index', { bikes: data });
    })
    .catch(function (error) {
       res.render('error', { message: 'could not get bikes' });
    });
});

module.exports = router;
