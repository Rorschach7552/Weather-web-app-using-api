var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

router.post('/login', async function(req, res, next) {
  const user = await User.findUser(req.body.username, req.body.password)
  if(user!== null){
    req.session.user = user
    res.redirect("/admin")
  }else{
    res.redirect("/?msg=fail")
  }
});

module.exports = router;
