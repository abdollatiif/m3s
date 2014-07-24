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
            }
        }
    },
    
    onObjectTap: function(record) {
        this.showObject(record);
    	//Ext.Msg.alert('Congratulation!', 'Tapped Item', Ext.emptyFn);
    },
    
    showObject: function(record) {
    	
        m3s.currentObject = record;

        if (!this.objectDetailCmp) {
            this.objectDetailCmp = Ext.widget('objectDetail');
        }

        //this.getTitlebar().setTitle(record.get('json'));
        
        /*
        Ext.Viewport.animateActiveItem(this.objectDetailCmp, {
            type: 'slide',
            direction: 'left'
        });*/
        
        objectList.push({
            title: 'Second View',
            padding: 10,

            items: [
                {
                    xtype: 'button',
                    text: 'Pop this view!',
                    handler: function() {
                    	objectList.pop();
                    }
                }
            ]
        });

        this.objectDetailCmp.setRecord(record);
        
        console.log(this.objectDetailCmp);
    }
});