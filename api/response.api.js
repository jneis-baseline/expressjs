module.exports = function(request, response) {  
    console.log('response header sent?', response.headerSent);

    // header fields' values
    response.set('Set-Cookie', 'Path=/')
    response.append('Set-Cookie', 'foo=bar; HttpOnly');

    // cookies (set header 'Set-Cookie')
    var options = {
        maxAge: 60000
    };
    response.cookie('bar', 'baz', options);
    response.clearCookie('foo');

    var content = 'exploring response api...';

    response.format({
        text: function() {
            response.send(content);
        },
        html: function() {
            response.send('<h6>' + content + '</h6>')
        },
        json: function() {
            response.json({message: content + ' ?'});
        }
    });

    // redirecting:
    //    response.redirect('http://google.com');
    //    response.redirect('/admin');

    // rendering:
    //    response.render('view-name', {param: 'value'});

    // sending files:
    //    response.sendFile('package.json')

    // status
    //    response.sendStatus(200)
    //    response.status(200).send('OK')
};
