var express = require('express');

var app = module.exports = express.createServer();

app.use(require('less-middleware')(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.set('appIndex', './public/app.html')
 
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/', function(req, res) {
  res.sendfile(app.get('appIndex'));
});

