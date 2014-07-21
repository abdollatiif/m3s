var express = require('express'),
    connection = require('./lib/db').conn,
    config = require('./config').config;

var app = module.exports = express.createServer();

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/', function(req, res) {
  res.sendfile('/public/app.html', {root: __dirname});
});

