var express = require('express');
var app = express();

app.use(require('./method.override'));
app.use(require('./morgan'));
app.use(require('./compression'));
app.use(require('./body.parser'));
app.use(require('./cookie.parser'));
app.use(require('./cookie.session'));
app.use(require('./session'));

app.use(require('./error.handler'));
app.use('/partial', require('./partial.response'));

app.use('/', function(request, response) {
    response.send('exploring 3rd-party middleware...');
});

app.listen(3000);
