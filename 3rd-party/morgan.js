// HTTP request logger middleware
var morgan = require('morgan');
var fs = require('fs');

var format = 'short';
// Apache standards: 'combined', 'common'

var log = fs.createWriteStream(__dirname + '/request.log', {flags: 'a'});

var options = {
    stream: log // defaults to process.stdout
};

module.exports = morgan(format, options);
