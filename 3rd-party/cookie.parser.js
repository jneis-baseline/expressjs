// middleware for parsing 'Cookie' header
var cookieParser = require('cookie-parser');

// populates request body with key-value pairs
//    optionally, parses a signed cookie (secret)

var logger = function(request, response, next) {
    console.log('cookies:', request.cookies);
    next();
};

// curl http://localhost:3000 --cookie "Cho=Kim;Greet=Hello"

module.exports = [
    cookieParser(),
    logger
];
