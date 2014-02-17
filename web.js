// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
});

app.get('/data', function(req, res) {
      console.log("In rest api. returning data");
      var file = fs.readFileSync("public/data/cast.json", "utf-8" );
      res.json(JSON.parse(file)) ;
    });

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});