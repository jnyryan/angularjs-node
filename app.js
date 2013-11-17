var express = require('express');
var fs = require("fs");
var app = express();

app.use(express.static(__dirname + '/public'));
 
app.get('/', function(req, res) {
   res.sendfile('./public/views/index.html');
});

app.get('/data', function(req, res) {
	console.log("here");
   var file = fs.readFileSync("public/data/cast.json", "utf-8" );
   res.json(JSON.parse(file)) ;
}); 
 
app.listen(3000);