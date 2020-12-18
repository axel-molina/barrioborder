var express = require('express');
var router = express.Router();

/* GET nosotros page. */
router.get('/', function(req, res, next) {
  res.render('biografia',{
    isBiografia:true
  }); //hbs
});

module.exports = router;