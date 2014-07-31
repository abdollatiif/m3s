Ext.define('m3s.controller.Objects', {

    extend: 'Ext.app.Controller',
    
    config: {

        refs: {
        	objectList: 'objectList',
        	titlebar: 'objectDetail titlebar',
        	main: 'main',
        	loggedOut: 'loggedOut'
        },

        control: {
        	objectList: {
                tapObject: 'onObjectTap'
            },
            '#objectBackButton': {
                tap: 'doObjectBack'
            },
            '#fbProfilePic': {
                tap: 'onProfileTap'
            },
            '#logoutButton': {
                tap: 'logout'
            },
            '#submitBtn': {
            	tap: 'onSubmitTap'
            }

        }
    },
    
    init: function() {

        m3s.Facebook.on({
            connected: this.onFacebookLogin,
            logout: this.onFacebookLogout,
            unauthorized: this.onFacebookUnauthorized,
            scope: this
        });
    },

    onFacebookLogin: function() {
    	
    	Ext.getBody().removeCls('splashBg');
    	
    	this.initContainer();
    	
    	if (!this.firstLoad) {
            this.onFirstLoad(FB.getUserID());
            this.firstLoad = true;
        }
    	
    },
    
    onFirstLoad: function(profileId) {
        
        var profilePic = Ext.getCmp('fbProfilePic');
        
        if (profilePic) {
        	
        	profilePic.setData({
                profileId: profileId
            });
        	
            profilePic.element.on('tap', function(e) {
                profilePic.fireEvent('tap', profilePic, e);
            });
        }
    },

    initContainer: function() {
        if (!this.mainContainer) {
            this.mainContainer = Ext.Viewport.add(Ext.create('m3s.view.Notes'));
        }
    },

    onObjectTap: function(record) {
    	m3s.currentObject = record;
        this.showObject(record);
    },
    
    showObject: function(record) {
    	
        if (!this.objectDetailCmp) {
            this.objectDetailCmp = Ext.widget('objectDetail');
        }

        this.getTitlebar().setTitle(record.get('title'));
        
        
        Ext.Viewport.animateActiveItem(this.objectDetailCmp, {
            type: 'slide',
            direction: 'left'
        });
                                
        this.objectDetailCmp.setRecord(record);
        
    },
    
    doObjectBack: function() {
        this.onObjectBack();
    },

    onObjectBack: function() {
        Ext.Viewport.animateActiveItem(this.getMain(), {
            type: 'slide',
            direction: 'right'
        });
    },
    
    onProfileTap: function(cmp) {
    	
        if (!this.logoutCmp) {

            this.logoutCmp = Ext.create('Ext.Panel', {
                width: 120,
                height: 45,
                top: 0,
                left: 0,
                modal: true,
                cls:'float-panel', 
                hideOnMaskTap: true,
                items: [
                    {
                        xtype: 'button',
                        id: 'logoutButton',
                        text: 'Logout',
                        ui: 'decline'
                    }
                ]
            });
        }

        this.logoutCmp.showBy(cmp);
    },

    logout: function() {
        this.logoutCmp.hide();
        FB.logout();
    },

    onFacebookLogout: function() {

        Ext.getBody().addCls('splashBg');
        Ext.Viewport.setActiveItem({ xtype: 'loggedOut' });

        if (this.objectDetailCmp) {
            this.objectDetailCmp.destroy();
        }

        this.getMain().destroy();
    },
    
    onFacebookUnauthorized: function() {
        if (this.mainContainer) {
            Ext.create('m3s.view.Dialog', {
                msg: "Oops! Your Facebook session has expired.",
                buttons: [
                    {
                        ui: 'green',
                        text: 'Login to Facebook',
                        handler: function() {
                            window.location = m3s.Facebook.redirectUrl();
                        }
                    }
                ]
            }).show();
        } 
        else {
            Ext.Viewport.add({ xtype: 'loggedOut' });
        }
    },
    
    onSubmitTap: function() {
    	    	
    	Ext.Ajax.request({
            url: '/viewing',
            method: 'POST',
            params: {
                objectId: m3s.currentObject.data.seq,
                json:   m3s.currentObject.data.json,
                comment: Ext.getCmp('txtComment').getValue(),
            },
            success: function(response) {

                var data = JSON.parse(response.responseText);

                if (data.fbError) {
                    m3s.Facebook.error(data.fbError);
                }
                
                Ext.getCmp('txtComment').reset();
            },
            scope: this
        });
    }
    
});