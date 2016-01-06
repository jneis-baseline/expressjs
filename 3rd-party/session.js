// session middleware
//    session data is stored server-side (cookies contain just session ID)
//    dev-ONLY default in-memory session store (memory leak problems)
var session = require('express-session');

var FileStore = require('session-file-store')(session);

var storeOptions = {
    path: './sessions'
};

var options = {
    store: new FileStore(storeOptions), // defaults to 'MemoryStore'
    cookie: { 
        secure: false // 'true' recommeded for prod (requires HTTPS)
    },    
    saveUninitialized: false, // reduces storage usage
    resave: false, // avoids resaving, even if the session was not modified
    secret: 'session-secret' // secret used to sign the session ID
};

var logger = function(request, response, next) {
    request.session.serverCounter = (request.session.serverCounter || 0) + 1;
    console.log('session (server):', request.session.serverCounter);
    next();
};

module.exports = [
    session(options),
    logger
];
