// middleware for compressing response bodies
var compression = require('compression');

var options = {
    threshold: 0 // response body size considered to be compressed
};

module.exports = compression(options);