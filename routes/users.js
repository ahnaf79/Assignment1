var express = require('express');
var router = express.Router();

router.get('/', userspage);


function userspage(req, res, next) {
    res.render(
        'users', {
            title: 'Users',
            userName: 'Ahnaf'
        }

    );

}

module.exports = router;