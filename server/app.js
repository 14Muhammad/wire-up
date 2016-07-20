var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    for(var i=0; i<5; i++){
        debugger;
        console.log(i);
    }
    console.log("done");
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})


// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
    debugger;
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})