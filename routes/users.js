var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    var db = req.db;
    var collection = db.get('usercolletion');
    collection.find({}, {}, function(e, docs){

        res.status(200).json({
            "userlist": docs
        });
    });
});

module.exports = router;
