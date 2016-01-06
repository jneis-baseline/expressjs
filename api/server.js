var express = require('express');
var app = express();

// app props

app.set('foo', true);
app.disable('bar');

console.log('env:', app.locals.settings.env);
console.log('views:', app.locals.settings.views);
console.log('foo:', app.locals.settings.foo);
console.log('bar:', app.locals.settings.bar);

// sub apps = express instances used for handling requests to a route
var subapp = express();

subapp.get('/', function(request, response) {
    console.log('subapp mountpath:', subapp.mountpath);
    response.send('exploring subapps...');
});

// multiple mountpaths
app.use(['/subapp', '/admin'], subapp);

// path params
app.param('id', function(request, response, next, id) {
    console.log('path param id:', id);
    next();
});

app.get('/user/:id', require('./request.api'));
app.get('/user/:id', require('./response.api'));

// avoiding route name duplication
app.route('/cars')
    .all(function(request, response, next) {
        console.log('route specific middleware');
        next();
    })
    .get(function(request, response) {
        console.log('get requests middleware');
        response.send('exploring routing mechanism...');
    })
    .post(function(request, response) {
        onsole.log('post requests middleware');
        response.send('exploring method-based routing...');
    });

app.listen(3000);
