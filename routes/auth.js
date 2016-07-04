var express = require('express');
var url = require('url');
var router = express.Router();
var bodyParser = require('body-parser');

/* auth */
router.post('/', function(req, res) {
  var username = req.query['username'];

    res.render('platform/', {title: "platform", client_token: 'token', user: {"username": req.body.username}});

});


module.exports = router;
