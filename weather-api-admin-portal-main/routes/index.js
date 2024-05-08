var express = require('express');
const ApiController = require('../controllers/ApiController')
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  simple_script_path = ApiController.GetSimpleScript()
  lat = ApiController.GetLat()
  long = ApiController.GetLong()
  res.render('simple_view', { title: 'Simple View', script_path: simple_script_path, lat: lat, long: long });
});

router.post('/zip', async function(req, res, next) {
  ApiController.setLocation(req.body.zip)
  setTimeout(function() {
    res.redirect("/")
  }, 2000)
});

module.exports = router;
