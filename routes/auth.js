var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/* auth */
router.post('/', function(req, res) {

  var token = jwt.sign({ foo: 'lsToken'}, 'fkdlfkdslfk');
	res.render('platform/',{ client_token: token});
});


module.exports = router;
