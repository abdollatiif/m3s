var    express = require('express'),
             _ = require('underscore'),
    connection = require('./lib/db').conn,
        config = require('./config').config,
       connect = require('connect'),
          json = require('json-component'),
         merge = require('merge');

var app = module.exports = express.createServer();

app.configure('development', function() {
    app.use(connect.static('./public'));
    app.enable('jsonp callback');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/', function(req, res) {
  res.sendfile('/public/index.html', {root: __dirname});
});

app.get('/objects', function(req, res, next) {
	
	var data = { objects: []};
	
	connection.query('SELECT * from object', function(err, objects, fields) {	
		
	    _.each(objects, function(object) {
	    	var obj = json.parse(object.json);
	    	var result = merge(object,obj);
	    	data.objects.push(result);
	    }); 
	    
	    res.json(data);
	});

});
