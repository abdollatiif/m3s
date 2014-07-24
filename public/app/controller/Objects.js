Ext.define('m3s.controller.Objects', {

    extend: 'Ext.app.Controller',
    
    config: {

        refs: {
        	objectList: 'objectList',
        	titlebar: 'objectDetail titlebar'
        },

        control: {
        	objectList: {
                tapObject: 'onObjectTap'
            },
            '#objectBackButton': {
                tap: 'doObjectBack'
            }
        }
    },
    
    onObjectTap: function(record) {
        this.showObject(record);
    },
    
    showObject: function(record) {
    	
        m3s.currentObject = record;

        if (!this.objectDetailCmp) {
            this.objectDetailCmp = Ext.widget('objectDetail');
        }

        this.getTitlebar().setTitle(record.get('json'));
        
        
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