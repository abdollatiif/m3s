var     express = require('express'),
              _ = require('underscore'),
     connection = require('./lib/db').conn,
         config = require('./config').config,
        connect = require('connect'),
           json = require('json-component'),
          merge = require('merge'),
             fb = require('./lib/facebook'),
          graph = require('fbgraph'),
    handleError = require('./lib/error').handleError,
stringifyObject = require('stringify-object');

var app = module.exports = express.createServer();

app.configure('development', function() {
    app.use(connect.static('./public'));
    app.enable('jsonp callback');
    
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        next();
    });
    
    app.use(connect.cookieParser());

    app.use(express.session({
        secret: config.sessionSecret
    }));

    app.use(connect.bodyParser());
    app.use(express.logger());
    app.use(express.errorHandler({ dumpExceptions: true }));
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/', function(req, res) {
  res.sendfile('/public/index.html', {root: __dirname});
});

app.get('/objects', fb.checkSession, fb.getUserDetails, function(req, res, next) {
	
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

app.post('/viewing', fb.checkSession, fb.getUserDetails, function(req, res, next) {
		
	var data = req.body;
	
	data = merge({
        profile: req.session.fb.user_id
    }, data);
	
	
	var da = stringifyObject(data, {
	    indent: '  ',
	    singleQuotes: false
	});
	
	console.log(da);
	
});

