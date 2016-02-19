var express = require('express');
var router = express.Router();

/* login. */
router.get('/', function(req, res, next) {

	res.render('logged', { title: 'logged in', user: {"name" : "lorenc"}});

});


module.exports = router;
