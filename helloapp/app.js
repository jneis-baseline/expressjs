var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello world!');
})

.post('/', function(request, response) {
    response.send('Got a POST request');
})

.put('/user', function(request, response) {
    response.send('Got a PUT request at /user');
})

.delete('/user', function(request, response) {
   response.send('Got a DELETE request at /user'); 
})

// path is relative to launch directory
.use(express.static('public'))

// absolute path + mount path 'files/'
.use('/files', express.static(__dirname + '/static'));

var server = app.listen(3000, function() {
   var host = server.address().address;
   var port = server.address().port;
   console.log('Helloworld app server at http://%s:%s', host, port); 
});
