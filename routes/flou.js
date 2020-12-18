var express = require('express');
var router = express.Router();

/* GET flou page. */
router.get('/', function(req, res, next) {
  res.render('flou', { 
    isFlou: true,
    layout: "flou"
   });
});

module.exports = router;
