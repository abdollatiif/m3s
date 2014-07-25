var    express = require('express'),
             _ = require('underscore'),
    connection = require('./lib/db').conn,
        config = require('./config').config,
       connect = require('connect'),
          json = require('json-component');

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
	
	var data = { objects: []}, data2 = { objects: []};
	
	connection.query('SELECT json from object', function(err, objects, fields) {	
		
	    _.each(objects, function(object) {
	    	data.objects.push(json.parse(object.json));
	    }); 
	    
	    _.each(objects, function(object) {
	    	data2.objects.push(object);
	    }); 
	    
	    console.log(data);
	    console.log(data2);


	    res.json(data);
	});

});
