/**
 * Created by l.estrefi
 */
var express = require('express');
var router = express.Router();

/* GET offers list. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('productcollection');
    collection.find({}, {}, function(e, product){

        res.status(200).json({
            "product": product
        });
    });

});

/* GET offers list. */
router.get('/list', function(req, res, next) {


    res.status(200).json({

        "offers": [ { "id":1, "name":"lorenc", "price":"33" }, { "id":1, "name":"lorenc", "price":"33" } ]
    })

});

module.exports = router;
