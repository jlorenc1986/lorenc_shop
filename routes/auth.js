var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/* auth */
router.post('/', function(req, res) {
  var token = jwt.sign({ tok: 'lsToken'}, 'fkdlfkdslfk');

	res.render('platform/',{ title: "platform",client_token: token, user:{}});

});


module.exports = router;
