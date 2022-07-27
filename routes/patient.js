var express = require('express');
const queryHelp = require('../helpers/patient-help');
var db=require('../config/connection')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('patient');
});
 

 
router.post('/query',function(req,res){
  console.log(req.body)
  queryHelp.addQuery(req.body,(result)=>{
    res.send("Success");
  })
   

})
module.exports = router;
