var express = require('express');
var jwt = require('jsonwebtoken');
var url = require('url');
var router = express.Router();
var bodyParser = require('body-parser');

/* auth */
router.post('/', function(req, res) {
  var token = jwt.sign({ tok: 'lsToken'}, 'fkdlfkdslfk');
  var username = req.query['username'];

	res.render('platform/',{ title: "platform",client_token: token, user:{name: username}});

});


module.exports = router;
