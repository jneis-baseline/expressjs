var express = require('express');
var app = express();

app.use(require('./compression'));
app.use(require('./body.parser'));
app.use(require('./cookie.parser'));
app.use(require('./cookie.session'));

app.use('/', function(request, response) {
    response.send('exploring 3rd-party middleware...');
});

app.listen(3000);
