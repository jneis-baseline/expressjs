var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

// Express-compliant template engines
//    export a function __express(filepath, options, callback),
//    which is called by response.render()

app.get('/', function(request, response) {
    var data = {
        title: 'Jade templates',
        message: 'Hello world'
    };
    
    response.render('index', data);
});

app.listen(3000);
