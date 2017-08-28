var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.redirect('/app/index.html');
});

app.listen(3200, function() {
    console.log("Server is running on 3200 !");
});