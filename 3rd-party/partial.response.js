// middleware for assembling responses with subsets of JSON objs,
//    accordingly to request query params ('?fields=')
var partialResponse = require('express-partial-response');

var fullObject = {
    firstName: 'Anakin',
    lastName: 'Skywalker',
    aliases: ['Darth Vader'],
    masters: [
        {
            firstName: 'Obi-Wan',
            lastName: 'Kenobi'
        },
        {
            firstName: 'Darth Sidious'
        }
    ]
};

var handler = function(request, response) {
    response.json(fullObject);
};

module.exports = [
    partialResponse(),
    handler
];

// sample requests:
// curl 'http://localhost:3000/partial'
// curl 'http://localhost:3000/partial?fields=firstName'
// curl 'http://localhost:3000/partial?fields=firstName,masters(firstName)'
