var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
 
app.get('/', function(req, res) {
   res.sendfile('./public/views/index.html');
});

app.get('/data', function(req, res) {
   var TestData = {};
    TestData.items = [
    { name: "John Ryan", position: "Da Bozz" },
    { name: "Frank", position: "Engineer" },
   
    ]
   
   res.json(TestData) ;
}); 
 
app.listen(3000);