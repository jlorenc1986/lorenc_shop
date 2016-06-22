var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    var db = req.db;
    var collection = db.get('usercolletion');
    collection.find({}, {}, function(e, userlist){

        res.status(200).json({
            "userlist": userlist
        });
    });
});


/* GET specific. */
router.get('/:id', function(req, res, next) {

    var db = req.db;
    var collection = db.get('usercolletion');
    collection.find({'id': req.params.id*1 }, {}, function(e, user ){

        res.status(200).json({
            "user": user
        });
    });
});
module.exports = router;
