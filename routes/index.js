var express = require('express');
const donationHelp = require('../helpers/donation-help');
var db=require('../config/connection')
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
router.post('/submit',function(req,res){
  console.log(req.body)
  donationHelp.addDonate(req.body,(result)=>{
    res.send("Donation successfull");
  })
   

})

module.exports = router;
