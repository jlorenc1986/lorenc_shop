/**
 * Created by l.estrefi on 18.06.15.
 */
var express = require('express');
var router = express.Router();

/* GET product list. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('productcollection');
    collection.find({}, {}, function(e, product){

        res.status(200).json({
            "product": product
        });
    });

});
/* GET specific product. */
router.get('/:id', function(req, res, next) {
    var db = req.db;
    var collection = db.get('productcollection');
    collection.find({'id' : req.params.id*1 }, {}, function(e, product){

        res.status(200).json({
            "product": product
        });
    });

});

module.exports = router;
