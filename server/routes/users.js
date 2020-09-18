var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello world!');
  res.render('profile', { title : 'Subject Information' });
});

module.exports = router;
