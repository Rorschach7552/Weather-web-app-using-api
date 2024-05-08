var express = require('express');
const ApiController = require('../controllers/ApiController')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  lat = ApiController.GetLat()
  long = ApiController.GetLong()
  res.render('map_view', { title: 'Map View', lat: lat, long: long });
});

module.exports = router;
