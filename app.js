var express = require('express');

var app = module.exports = express.createServer();

var port = process.env.PORT || 3000;

app.configure('development', function() {
    app.use(connect.static('./public'));
    app.set('appIndex', './public/app.html');
});

app.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/', function(req, res) {
  res.sendfile(app.set('appIndex'));
});

