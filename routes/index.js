var express = require('express');
var router = express.Router();

/* GET home page of the project. */
router.get('/', function(req, res, next) {
  res.send('lorenc_shop API V1.0');
});

module.exports = router;
