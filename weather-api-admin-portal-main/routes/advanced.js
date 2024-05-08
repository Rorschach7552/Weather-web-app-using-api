var express = require('express');
const ApiController = require('../controllers/ApiController')
var router = express.Router();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


/* GET home page. */
router.get('/', function (req, res, next) {

  var days = []
  var date = new Date();
  let today = date.getDay();

  for (i = 0; i < 7; i++) {
    var day = today + i;
    day %= 7;
    days[i] = weekday[day];
  }

  advanced_script_path = ApiController.GetAdvancedScript()
  lat = ApiController.GetLat()
  long = ApiController.GetLong()
  res.render('advanced_view', { title: 'Advanced View', dayTitles: days, script_path: advanced_script_path, lat: lat, long: long });
});

module.exports = router;
