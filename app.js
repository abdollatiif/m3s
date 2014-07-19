var express = require('express');

var app = module.exports = express.createServer();

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

