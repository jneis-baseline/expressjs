var express = require('express');
var app = express();

var timer = function(request, response, next) {
    console.log('time:', Date.now());
    next();
};

var typer = function(request, response, next) {
    console.log('request type:', request.method);
    next();
};

// application-level middleware

app.use(timer);
app.use('/user/:id', typer);

// loading multiple middleware functions at a mount point:

app.get('/user/:id', function(request, response, next) {
    console.log('request url:', request.originalUrl);
    // pass control to the next route (skip next middleware)
    next('route');
}, function(request, response, next) {
    // doesn't execute
    console.log('request param id:', request.params.id);
    next();
});

app.get('/user/:id', function(request, response) {
    response.send('user ' + request.params.id);
});

// router-level middleware
//    same as app-level, but bound to a Router instance

var router = express.Router();

router.use('/admin/:id', typer);

router.get('/admin/:id', function(request, response, next) {
    console.log('request url:', request.originalUrl);
    next();
}, function(request, response) {
    response.send('admin ' + request.params.id);
});

app.use('/', router);

// error-handling middleware

app.use(function(err, request, response, next) {
    console.error(err.stack);
    response.status(500).send('ooops');
});

// built-in middleware

// config for serving request files
var options = {
    dotfiles: 'ignore', // ignore hidden files ('allow', 'deny')
    extensions: ['html', 'htm'], // fallback to alternative extensions
    index: false, // not to serve 'index.html' for folder requests
    setHeaders: function(response, path, stat) { // set custom headers
        response.set('x-timestamp', Date.now());
    }
};

app.use(express.static(__dirname + '/public', options));

app.listen(3000);
