var express = require('express');
var router = express.Router();

/* GET fotos page. */
router.get('/', function(req, res, next) {
  res.render('fotos',{
    isFotos:true
  }); //hbs
});

module.exports = router;