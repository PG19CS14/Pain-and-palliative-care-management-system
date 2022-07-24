var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'P-Care' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'P-Care' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'P-Care' });
});
router.get('/donation', function(req, res, next) {
  res.render('donation', { title: 'P-Care' });
});
module.exports = router;
