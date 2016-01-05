// middlewares for populating the request body
var bodyParser = require('body-parser');

// parses requests as:
//   - application/json
//   - application/x-www-form-urlencoded (key-value pairs)

var jsonOptions = {
    strict: false // accepts anything (rather than only arrays & objs)
};

var formOptions = {
    extended: true // accepts values of any type
};

module.exports = [
    bodyParser.json(jsonOptions),
    bodyParser.urlencoded(formOptions)
];
