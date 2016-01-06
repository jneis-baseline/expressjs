// middleware for allowing PUT/DELETE where the client doesn't support it
var methodOverride = require('method-override');

var getter = 'X-HTTP-Method-Override'; // default

// method mapping defined by:
//  - a string starting with 'X-' (name of header)
//  - other strings (query param)
//  - a function that takes request/response params

var options = {
    methods: ['POST'] // default
    // what methods the original request must be to trigger overriding
};

module.exports = methodOverride(getter, options);
