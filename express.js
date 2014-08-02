var express = require('express');
var app = express();

app.get('/', function(req, res){
	var body = 'Hello World';
	res.send('Hello World');
});


app.listen(3000);
console.log('Listening on port 3000');