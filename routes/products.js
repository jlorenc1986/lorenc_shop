/**
 * Created by l.estrefi on 18.06.15.
 */
var express = require('express');
var router = express.Router();

/* GET product list. */
router.get('/', function(req, res, next) {
   res.status(200).json({

        products: [{
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
/* GET specific product. */
router.get('/:id', function(req, res, next) {
  
   res.status(200).json({

        product: [{
                id: 1,
                name: "beer",
                price: "33"
            }
        ]
    });

});

module.exports = router;
