var express = require('express');
var app = express();

app.use(function(request, response, next) {
    throw new Error('errrrrrrooou');
});

// error-handling middleware should be defined last

app.use(function(error, request, response, next) {
    console.error(error.stack);
    next(error);
});

// (built-in) default error handler:
//    - added at the end of the middleware stack
//    - handles all errors not handled by custom handlers,
//    - writes the stack trace to the response (except in prod env)

var last = function(error, request, response, next) {
    if (response.headersSent) { // the response has been streamed
        // delegates to default handler (writes stack trace to response)
        return next(error);
    }
    response.status(500).send('ooops');
};

app.use(last);

app.listen(3000);
