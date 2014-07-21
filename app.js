var    express = require('express'),
    connection = require('./lib/db').conn,
        config = require('./config').config,
       connect = require('connect');

var app = module.exports = express.createServer();

app.configure('development', function() {
    app.use(connect.static('./public'));
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/', function(req, res) {
  res.sendfile('/public/index.html', {root: __dirname});
});
