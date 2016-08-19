var express = require('express'), cors = require('cors');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wireupdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, ':: mongoose connection error:'));
db.once('open', function() {
    console.log(":: mongoose connected");
});


var projects = require('./routes/projects');
var members = require('./routes/members');
var events = require('./routes/events');
var clients = require('./routes/clients');
var notes = require('./routes/notes');
app.use('/wireup/', projects);
app.use('/wireup/', members);
app.use('/wireup/', events);
app.use('/wireup/', clients);
app.use('/wireup/', notes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

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
    var host = server.address().address
    var port = server.address().port
    console.log("WireUp app listening at http://%s:%s", host, port)
})


function randomString(len, an){
    an = an&&an.toLowerCase();
    var str="", i=0, min=an=="a"?10:0, max=an=="n"?10:62;
    for(;i++<len;){
        var r = Math.random()*(max-min)+min <<0;
        str += String.fromCharCode(r+=r>9?r<36?55:61:48);
    }
    return str;
}