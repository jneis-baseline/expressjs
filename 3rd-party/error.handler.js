// development-only error handler middleware
var errorHandler = require('errorhandler');

var options = {
    log: true // 'true': log errors using console.error
    // 'false': only send errors back in the response
    // a function: for handling errors (e.g., a notifier)
};


// simple logger for environments other than dev
var logger = function(error, request, response, next) {
    console.error(error.stack);
    next(error);
};

// only use in dev
module.exports = (process.env.NODE_ENV === 'development')
    ? errorHandler(options)
    : logger;
