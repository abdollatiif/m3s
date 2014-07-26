var           _ = require('underscore'),
    handleError = require('./error').handleError,
         config = require('../config').config,
          graph = require('fbgraph');


exports.checkSession = function(req, res, next) {

    var fbCookie = req.cookies['fbsr_' + config.client_id],
        parsedToken, base64data;

    if (!fbCookie) {
        handleError('No Facebook cookie detected.', null, req, res);
        return;
    }

    base64data = fbCookie.split('.', 2);
    parsedToken = JSON.parse(new Buffer(base64data[1], 'base64').toString('ascii'));

    if (req.session.fb && req.session.fb.user_id == parsedToken.user_id && req.session.fb.code == parsedToken.code) {
        graph.setAccessToken(req.session.fb.access_token);
        next();
    } 
    else 
    {
        console.log("Found Facebook cookie. Swapping Auth code for access_token...");

        req.session.fb = {
            user_id: parsedToken.user_id,
            code: parsedToken.code
        };

        graph.authorize({
            "redirect_uri":   "",
            "client_id":      config.client_id,
            "client_secret":  config.client_secret,
            "code":           parsedToken.code
        }, function(err, facebookRes) {

            if (err) {
                handleError('Error obtaining Facebook access_token.', facebookRes, req, res);
                return;
            }

            console.log("Successfully obtained Facebook access_token.");

            req.session.fb.access_token = facebookRes.access_token;
            
            graph.setAccessToken(facebookRes.access_token);
            next();

        });
    }
}


exports.getUserDetails = function(req, res, next) {
    if (req.session.fb.user_data) 
    {
        next();
    } 
    else 
    {
        graph.get("/me", function(err, user) {

            if (err) {
                handleError('Could not retrieve user info', user, req, res);
                return;
            }

            req.session.fb.user_data = user;

            next();
        });
    }
}


exports.getFriendIds = function(req, res, next) {

    if (req.session.fb.friendIds) 
    {
        next();
    } 
    else 
    {

        console.log("Getting list of friends for " + req.session.fb.user_id + "...");

        graph.get("/me/friends", function(err, friends) {

            if (err) {
                handleError('Could not retrieve list of friends', friends, req, res);
                return;
            }

            console.log("Found " + friends.data.length + " friends. Searching for viewings...");

            var friendIds = _.map(friends.data, function(f) {
                return f.id
            });

            friendIds.push(req.session.fb.user_id);
            req.session.fb.friendIds = friendIds;

            next();
        });
    }
}


