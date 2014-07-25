Ext.define('m3s.controller.Objects', {

    extend: 'Ext.app.Controller',
    
    config: {

        refs: {
        	objlist: 'objlist',
        	titlebar: 'objectDetail titlebar',
        	main: 'main'
        },

        control: {
        	objlist: {
                tapObject: 'onObjectTap'
            },
            '#objectBackButton': {
                tap: 'doObjectBack'
            }
        }
    },
    
    init: function() {
        console.log(this.getObjlist());
    },
    
    onObjectTap: function(record) {
    	console.log(record);
        this.showObject(record);
    },
    
    showObject: function(record) {
    	
        m3s.currentObject = record;

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
    }
});