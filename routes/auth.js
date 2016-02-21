var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/* auth */
router.post('/', function(req, res) {
  var token = jwt.sign({}, app.get('superSecret'), {
		expiresInMinutes: 1440
	});
	console.log('post');

	res.render('auth', { title: 'logged in', user: {"name" : "lorenc"}, token: token});

});


module.exports = router;
