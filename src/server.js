var express = require('express');
var server = express();
var path = require('path');

server.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './../build/index.html'));
})

server.get('/static/css/main.4a21da7f.css', function(req, res) {
	res.sendFile(path.join(__dirname, './../build/static/css/main.4a21da7f.css'));
})

server.get('/static/js/main.0682624e.js', function(req, res) {
	res.sendFile(path.join(__dirname, './../build/static/js/main.0682624e.js'));
})

server.listen(3000, function() {
	console.log("listening on localhost:3000");
})