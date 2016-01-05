// middleware for providing guest sessions to clients
var cookieSession = require('cookie-session');

// if a session is new, a 'Set-Cookie' will be produced
//    regardless if the client is authenticated or not

var options = {
    name: 'cookie-name', // defaults to 'session'
    keys: ['Cho', 'Greet'],
    secret: '',
    cookie: {
        maxAge: 60*60*1000, // ms from now to expire the cookie
        httpOnly: true, // the cookie is not available to client JS
        overwrite: true // overwrite previously set cookies of same name
    }
};

var logger = function(request, response, next) {
    request.session.counter = (request.session.counter || 0) + 1;
    console.log('session:', request.session.counter);
    next();
};

module.exports = [
    cookieSession(options),
    logger
];
