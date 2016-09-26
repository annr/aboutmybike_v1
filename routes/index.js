var express = require('express');
var router = express.Router();

var db = require('../pg-promise/db').db;

var title = "About My Bike";

/* GET home page. */
router.get('/', function(req, res, next) {
  db.any("select * from bike", [true])
    .then(function (data) {
        res.render('index', { bikes: data });
    })
    .catch(function (error) {
       res.render('error', { message: 'could not get bikes' });
    });
});

module.exports = router;
