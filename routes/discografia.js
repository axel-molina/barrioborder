var express = require('express');
var router = express.Router();

/* GET discografia page. */
router.get('/', function(req, res, next) {
  res.render('discografia',{
    isDiscografia:true
  }); //hbs
});

module.exports = router;