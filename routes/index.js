var express = require('express');
var router = express.Router();
var db = require('../db/queries');
var title = "About My Bike";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

router.get('/api/bikes', db.getAllBikes);
router.get('/api/bike/:id', db.getSingleBike);
router.post('/api/bike/create', db.createBike);
router.put('/api/bike/:id', db.updateBike);
router.delete('/api/bike/:id', db.removeBike);

module.exports = router;
