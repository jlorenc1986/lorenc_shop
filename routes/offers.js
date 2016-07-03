/**
 * Created by l.estrefi
 */
var express = require('express');
var router = express.Router();

/* GET offers list. */
router.get('/', function (req, res) {

    'use strict';


    res.status(200).json({

        offers: [{
                id: 1,
                name: "beer",
                price: "33"
            },
             {
                id : 2,
                name: "kitkat",
                price: "12"
            },
             {
                id: 3,
                name: "cocacola",
                price: "22"
            }, 
            {
                id: 4,
                name: "fritzcola",
                price: "32"
            }, 
            {
                id: 5,
                name: "orangina",
                price: "77"
            }

        ]
    });


});


module.exports = router;