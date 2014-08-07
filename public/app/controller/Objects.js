Ext.define('m3s.controller.Objects', {

    extend: 'Ext.app.Controller',
    
    config: {
    	
    	profile: Ext.os.deviceType.toLowerCase(),

        refs: {
        	
        	objectList: 'objectList',
        	commentsBtn: 'notes commentsBtn',
        	main: 'main',
        	loggedOut: 'loggedOut',
        	notes: 'notes'
        },

        control: {
        	notes: {
        		tapNode: 'onNodeTap'
            },
            commentsList: {
            	tapCommentsList: 'onCommentsListTap'
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
            },
            '#commentsBtn': {
            	tap: 'onCommentsTap'
            },
            '#plusBtn': {
            	tap: 'onPlusTap'
            },
            '#iconBack':{
            	tap: 'onIconBack'
            },
            '#iconSave':{
            	tap: 'onIconSave'
            },
            '#nextSibling':{
            	change: 'onChangeNextSibling'
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

    onNodeTap: function(record) {
    	m3s.currentNode = record;
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
                
                var obj = Ext.StoreMgr.get('Comments').load();
                
                Ext.getCmp('commentsBtn').setBadgeText(obj.data.getCount());
                
            },
            scope: this
        });
    },
    
    onCommentsTap: function () {
    	
    	 if (!this.comments) {
             this.comments = Ext.create('m3s.view.Comments');
         }
    	 
    	 var comments = this.comments;
    	 
    	 if (this.getProfile() == "phone") {
    		 comments.setWidth(null);
    		 comments.setHeight('85%');
    		 comments.setTop(null);
    		 comments.setLeft(0);
         }

         if (!comments.getParent()) {
             Ext.Viewport.add(comments);
         }
         
         var obj = Ext.StoreMgr.get('Comments').load();
                  
         Ext.getCmp('commentsBtn').setBadgeText(obj.data.getCount());
         
         comments.show();
    },
    
    onCommentsListTap: function(record,e,eOpts){
    	// TO DO
    },
    
    onPlusTap: function(record,e,eOpts){
    	
    	var options=[], i=0, idp, sibling='{', level, meta;
    	var data = this.getNotes().getActiveItem().getStore().getData().items;
    	options[0] = {text: '--Select Next Sibling--', value: null};
    	      
    	if (data.length > 0){
    		
    		m3s.isNewChild=false;
    		
    		Ext.Array.each(data, function(name, index, itemsItSelf) {
    			idp = name.getData().idp;
    			level = name.getData().level;
    			meta = name.getData().meta;
    			sibling = sibling + '"' + i + '":"' + name.getData().seq + '",';
    			options[i+1] = {text: name.getData().text, value:name.getData().seq};
    			i++;
    			m3s.currentIsLastNodeLeaf = name.getData().leaf;
    			m3s.LastNodeSeq = name.getData().seq;
    		});
    		
    		sibling = sibling.substring(0, sibling.length - 1) + '}' 
    		options[i+1] = {text: 'Last Position', value: 'last'};
    	}else{
    		
    		var currentData = m3s.currentNode.getRecord().getData();
    		meta = currentData.meta;
    		level = currentData.level + 1;
    		idp = currentData.seq;
    		sibling = null;
    		m3s.isNewChild=true;
    		m3s.newChildSeq=currentData.seq + 1;   		
    	}	
    	    	
    	if (!this.objectFormCmp) {
            this.objectFormCmp = Ext.widget('objectForm');
        }    
    	
    	if (data.length > 0){
    		this.objectFormCmp.getInnerItems()[0].getInnerItems()[0].setOptions(options);}
    	
    	this.objectFormCmp.setValues({
    		nextSibling:  null,
    		json: '{"text":""}',
    		leaf: 1,
    		sibling: sibling,
    		idp: idp,
    		level: level,
    		meta: meta
    	})
    	
        Ext.Viewport.animateActiveItem(this.objectFormCmp, {
            type: 'slide',
            direction: 'right'
        });                               
    },
    
    onIconBack: function(){
    	Ext.Viewport.animateActiveItem(this.getNotes(), {
            type: 'slide',
            direction: 'right'
        });
    },
    
    onIconSave: function(){
    	    	
    	if (!this.objectFormCmp)
    		return;
    	    	
    	Ext.getCmp('objectForm').add({
    	    masked: {
    	       xtype: 'loadmask',
    	       message: 'Be patient...',
    	       indicator: true
    	    }
    	});
        
    	this.objectFormCmp.submit({
    	    url: '/createNode',
    	    method: 'POST',
    	    success: function() {
    	    	
    	       Ext.getCmp('objectForm').setMasked(false);
    	    	
    	       console.log('Node created successfully!');
    	    	
    	       Ext.getCmp('notes').getStore().load();
    	       
    	       console.log(m3s.currentNode);
    	       
    	       Ext.getCmp('notes').goToNode(m3s.currentNode);
    	       
    	       /*Ext.Viewport.animateActiveItem(Ext.getCmp('notes'),{
    	            type: 'slide',
    	            direction: 'right'
    	        });*/
    	    }
    	});
    },
    
    onChangeNextSibling: function(self, newValue, oldValue, eOpts){
    	
    	console.log("enter onChangeNextSibling");
    	
    	var seq;
    	
    	if (!this.objectFormCmp)
    		return;
    	
    	var obj = this.objectFormCmp;
    	
    	if(!m3s.isNewChild){
    		self.setHidden(false);
	    	if (newValue=='last'){
	    		if(m3s.currentIsLastNodeLeaf){
	    			seq = m3s.LastNodeSeq + 1;
	    			console.log(seq);
	    			obj.setValues({
	            		seq: seq
	            	});
	    		}else{
	    			Ext.Ajax.request({
	    			    url: '/maxChildSeq',
	    			    params: {
	    			        seq: m3s.LastNodeSeq
	    			    },
	    			    success: function(response){    			    	
	    			    	if (response.responseText == 'null'){
	    			    		seq = m3s.LastNodeSeq + 1;
	    			    		console.log(seq);
	    			    		obj.setValues({
	    			        		seq: seq
	    			        	});
	    			    	}else{
	    			    		var data = parseInt(JSON.parse(response.responseText)) + 1;
	    			    		console.log(data);
	    			    		obj.setValues({
	    			        		seq: data
	    			        	});   			    		
	    			    	}
	    			    }
	    			});
	    		}
	    	}else{
	    		console.log(newValue);
	    		obj.setValues({
	        		seq: newValue
	        	});
	    	}
    	}else{
	    	self.setHidden(true);
	    	console.log(m3s.newChildSeq);
	    	obj.setValues({
	    		seq: m3s.newChildSeq
	    	});
    	}
    }    
});