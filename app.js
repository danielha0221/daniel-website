var express = require('express');
var app = express();

var port = process.env.port || 80;

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
}); 

app.listen(port, function () {
	console.log('hahaha')
});
