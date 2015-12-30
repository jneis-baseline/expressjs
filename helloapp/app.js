var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello world!');
});

var server = app.listen(3000, function() {
   var host = server.address().address;
   var port = server.address().port;
   console.log('Helloworld app server at http://%s:%s', host, port); 
});
