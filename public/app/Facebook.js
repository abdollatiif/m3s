Ext.define('m3s.Facebook', {

    mixins: ['Ext.mixin.Observable'],

    singleton: true,

    fbTimeout: 10000,

    initialize: function(appId) {

        this.appId = appId;

        window.fbAsyncInit = Ext.bind(this.onFacebookInit, this);

        (function(d){
            var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
            js = d.createElement('script'); js.id = id; js.async = true;
            js.src = "https://connect.facebook.net/en_US/all.js";
            d.getElementsByTagName('head')[0].appendChild(js);
        }(document));
    },

    onFacebookInit: function() {

        if (!this.appId) {
            Ext.Logger.error('No Facebook Application ID set.');
            return;
        }

        FB.init({
            appId: this.appId,
            cookie: true,
            frictionlessRequests: true,
            status: true,
            xfbml: true,
            version: 'v2.0'
        });

        var me = this;
        me.hasCheckedStatus = false;

        FB.Event.subscribe('auth.logout', function() {
            if (me.hasCheckedStatus) {
                me.fireEvent('logout');
            }
        });

        FB.getLoginStatus(function(response) {

            me.fireEvent('loginStatus');

            clearTimeout(me.fbLoginTimeout);
            me.hasCheckedStatus = true;

            if (response.status == 'connected') {
                me.fireEvent('connected');
            } 
            else {
                me.fireEvent('unauthorized');
            }
        });

        me.fbLoginTimeout = setTimeout(function() {
            me.fireEvent('loginStatus');
            me.fireEvent('exception', {
                type: 'timeout',
                msg: 'The request to Facebook timed out.'
            });
        }, me.fbTimeout);
    },

    /**
     * Returns the app location. If we're inside an iFrame, return the top level path
     */
    currentLocation: function() {
        if (window.top.location.host) {
            return window.top.location.protocol + "//" + window.top.location.host + window.top.location.pathname
        } 
        else {
            return window.location.protocol + "//" + window.location.host + window.location.pathname
        }
    },

    /**
     * The Facebook authentication URL.
     */
    redirectUrl: function() {

        var redirectUrl = Ext.Object.toQueryString({
            redirect_uri: this.currentLocation(),
            client_id: this.appId,
            scope: 'publish_actions,share_item'
        });

        if (!Ext.os.is.Android && !Ext.os.is.iOS && /Windows|Linux|MacOS/.test(Ext.os.name)) {
            return "https://www.facebook.com/dialog/oauth?" + redirectUrl;
        } 
        else {
            return "https://m.facebook.com/dialog/oauth?" + redirectUrl;
        }
    },

    error: function(err) {

        var errMsg = "Unknown Facebook error";

        if (typeof err == 'object') {

            if (err.type && err.message && err.code) {

                if (err.type == 'OAuthException' && err.code == 100) {

                    errMsg = [
                        "<p>Activate your Facebook Timeline to share actions with friends.</p>",
                        "<p>Click 'Get Timeline' on the bottom of the Facebook page, then come back here.</p>"
                    ].join('');

                    Ext.create('m3s.view.Dialog', {
                        msg: errMsg,
                        buttons: [
                            {
                                ui: 'green',
                                text: 'Activate Timeline on Facebook',
                                handler: function() {
                                    window.location = 'http://www.facebook.com/timeline';
                                }
                            },
                            {
                                ui: 'red',
                                text: "Don't ask again.",
                                handler: function() {
                                    this.getParent().hide()
                                }
                            }
                        ]
                    }).show();

                    return;

                } 
                else if (err.type == 'OAuthException' && err.code == 200) {

                    errMsg = [
                        "<p>We need permission to share your Watchlist activity with friends.</p>",
                        "<p>Go to Facebook and grant permission?</p>"
                    ].join('');

                    Ext.create('m3s.view.Dialog', {
                        msg: errMsg,
                        buttons: [
                            {
                                ui: 'green',
                                text: 'Grant permissions.',
                                handler: function() {
                                    window.top.location = WL.Facebook.redirectUrl();
                                }
                            },
                            {
                                ui: 'red',
                                text: "Don't ask again.",
                                handler: function() {
                                    this.getParent().hide()
                                }
                            }
                        ]
                    }).show();

                    return;
                }

                errMsg = err.message;
            }
        }

        Ext.create('m3s.view.Dialog', { msg: errMsg }).show();
    }

});
