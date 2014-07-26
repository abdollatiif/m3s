Ext.define('m3s.controller.Facebook', {

    extend: 'Ext.app.Controller',

    requires: ['m3s.Facebook'],

    config: {
        control: {
            '#fbLogin': {
                tap: 'onFacebookLogin'
            }
        }
    },

    init: function() {
        m3s.Facebook.on({
            exception: function() {
                Ext.create('m3s.view.Dialog', { msg: 'The connection to Facebook has timed out' }).show();
            },
            loginStatus: function() {
                Ext.fly('appLoadingIndicator').destroy();
            }
        });
    },

    onFacebookLogin: function() {
        window.top.location = m3s.Facebook.redirectUrl();
    }
});