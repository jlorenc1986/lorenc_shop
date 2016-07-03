var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.status(200).json({

        users: [{
                id: 1,
                name: "lorenc",
              
            }
        ]
    });
});


/* GET specific. */
router.get('/:id', function(req, res, next) {

     res.status(200).json({

        users: [{
                id: 1,
                name: "lorenc",
              
            }
        ]
    });
});
module.exports = router;
