var express = require('express');
var app = express();
var path = require('path');


app.use(express.static('public'));

var port = 3333;

app.listen(port, function() {
  console.log('server up on: ', port);
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});
