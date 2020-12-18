var express = require('express');
var router = express.Router();

/* GET cultura page. */
router.get('/', function(req, res, next) {
  res.render('cultura', { 
    isCultura: true,
    layout:"cultura"
   });
});

module.exports = router;
