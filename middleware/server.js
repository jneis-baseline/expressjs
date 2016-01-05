var express = require('express');
var server = express();
var util = require('util');

// if a middleware function doesn't end the req-resp cycle
//    it must call next() to pass control to the next middleware func;
//    otherwise, the request will be left hanging

var logger = function(request, response, next) {
    console.log('request received');
    next();
};

var stamper = function(request, response, next) {
    request.requestTime = Date.now();
    next();
};

// middleware loading order matters:
//    requests don't reach functions loaded after one that ends the cycle

server.use(logger);
server.use(stamper);

server.get('/', function(request, response) {
    response.send(util.format('requested at', request.requestTime,
        '\nthis ends the request-response cycle'));
});

server.listen(3000);
