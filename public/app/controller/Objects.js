Ext.define('m3s.controller.Objects', {

    extend: 'Ext.app.Controller',
    
    config: {

        refs: {
        	objectList: 'objectList',
            toolbar: 'objectDetail toolbar',
        },

        control: {
        	objectList: {
                tapObject: 'onObjectTap'
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

        this.getToolbar().setTitle(record.get('json'));

        Ext.Viewport.animateActiveItem(this.objectDetailCmp, {
            type: 'slide',
            direction: 'left'
        });

        this.objectDetailCmp.setRecord(record);
    }
});