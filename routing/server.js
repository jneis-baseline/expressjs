var express = require('express');
var app = express();

var handler = function(message) {
    return function(request, response) {
        response.send(message);
    };
};

// main HTTP methods supported:
// get, post, put, delete, head, options, trace

app.get('/', handler('GET request to homepage'))

.post('/', handler('POST request to homepage'))

.all('/secret', handler('request to /secret'))

// route string patterns

.get('/ab?cd', handler('matches: acd, abcd'))
.get('/ab(cd)?e', handler('matches: ace, abcde'))
.get('/ab+cd', handler('matches: abcd, abbcd, abbbcd, ...'))
.get('/ab*cd', handler('matches: abcd, abxcd, ab123cd, abRANDOMcd...'))

.get('/*a', handler('matches any route containing "a"'))
.get('/*fly$/', handler('matches "butterfly" and "dragonfly", but not "dragonfly man"'))

// chaining handlers like middleware

.get('/example/b', function(request, response, next) {
    console.log('the response will be sent by the next function');
    next();
}, handler('Hello from B'))

// response ending methods:
// send, end, json, jsonp, redirect, render, sendFile, sendStatus, download

.get('/download', function(request, response) {
    response.download(__dirname + '/package.json');
})

// chaining one route's handlers
.route('/book')
    .get(handler('Get a random book'))
    .post(handler('Add a book'))
    .put(handler('Update a book'));

// modularizing routers
var birds = require('./birds');

app.use('/birds', birds);

app.listen(3000);
