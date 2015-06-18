/**
 * Created by l.estrefi on 18.06.15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/viewProduct', function(req, res, next) {
    res.render('products/viewProducts', { title: 'Express' });
});

module.exports = router;
