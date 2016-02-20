var express = require('express');
var router = express.Router();

/* login. */
router.get('/', function(req, res, next) {

	res.render('index', { title: 'login', isLogin: true });

});


module.exports = router;
