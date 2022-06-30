var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', home);


function home(req, res, next) {
    res.render(
        'index', {
            title: 'Express',
            userName: 'Ahnaf'
        }
    );

}

module.exports = router;