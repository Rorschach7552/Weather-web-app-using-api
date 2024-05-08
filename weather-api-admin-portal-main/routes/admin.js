var express = require('express');
const ApiController = require('../controllers/ApiController');
var router = express.Router();

const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    res.locals.username = req.session.user.username
    next()
  } else {
    res.redirect("/?msg=invalid_credentials")
  }
}

router.use(sessionChecker)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin_portal', { title: 'Admin Portal' });
});

router.post('/admin', async function (req, res, next) {
  console.log("post data");
  let api = req.body.weatherapi;
  console.log(api);
  ApiController.SetApi(api);
  res.redirect("/admin")
})

module.exports = router;
