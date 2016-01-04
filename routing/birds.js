var express = require('express');
var router = express.Router();

var timeLogger = function(request, response, next) {
    console.log('Time: ', Date.now());
    next();
};

router.use(timeLogger)

    // the following routes are relative to
    //     the path defined for this router (@server.js)

    .get('/', function(request, response) {
        response.send('Birds home page');
    })

    .get('/about', function(request, response) {
        response.send('About birds');
    });

module.exports = router;
