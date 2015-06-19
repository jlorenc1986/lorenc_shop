/**
 * Created by l.estrefi on 18.06.15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.json({ name : 'lorenc'});
});

module.exports = router;
