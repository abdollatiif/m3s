var     express = require('express'),
              _ = require('underscore'),
     connection = require('./lib/db').conn,
         config = require('./config').config,
        connect = require('connect'),
           rest = require('restler'),
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
	
	connection.query('INSERT INTO viewer SET ?', data, function(err, result) {
		
        if (err) {
            handleError('Could not save viwering', err, req, res);
            return;
        }

        console.log("Successfully saved new viewering");

        var resp = { success: true };

        if (req.fbError) {
            resp.fbError = req.fbError;
        }

        res.json(resp);
    });
	
});

app.get('/groceries', fb.checkSession, fb.getUserDetails, function(req, res, next) {

    var url = "http://ism.ma/object.php?method=getTree&seq=2";

    rest.get(
        url, { parser: rest.parsers.json }
    )
    .on('complete', function(data) {

        if (data.error) {
            res.json({success: false, error: data.error});
            return;
        }

        res.json(data);
        
        //console.log(data);

    })
    .on('error', function(err) {
        console.log('Error getting Articles', err);
    });

});

