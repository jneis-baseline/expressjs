module.exports = function(request, response, next) {    
    console.log('base url:', request.baseUrl);
    console.log('original url:', request.originalUrl);
    
    console.log('protocol:', request.protocol);
    console.log('path:', request.path);
    
    console.log('path params:', request.params);
    console.log('query string:', request.query);

    console.log('headers', request.headers);

    // key-value pairs populated by 'body-parser' and 'cookie-parser'
    console.log('body:', request.body);
    console.log('cookies:', request.cookie);

    next();
};
