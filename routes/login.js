var express = require('express');
var router = express.Router();

/* login. */
router.get('/', function(req, res, next) {

	res.render('login/', { title: 'login', isLogin: true });

});


module.exports = router;
