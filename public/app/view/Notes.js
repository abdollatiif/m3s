Ext.define('m3s.view.Notes', {
	
    extend: 'Ext.NestedList',
    
    xtype: 'notes',
    
    id: 'notes',
    
    config: {
    	
        fullscreen: true,
        
        toolbar: {
        	items: [
            	{
            	   xtype: 'component',
    		       cls: 'fbProfilePic',
    		       id: 'fbProfilePic',
    		       tpl: '<img src="https://graph.facebook.com/{profileId}/picture?type=square" />'
    		    }
            ]
        },
                
        title: 'Thesis [abdollatiif@gmail.com]',
        
        listConfig          : {
            itemTpl: '{text}'
        }, 
        
        store: 'Groceries',
                
        detailCard: {
            xtype: 'objectDetail'
        },
        
        listeners: {
            
            leafitemtap: function(nestedList, list, index, target, record) {          	
            	var detail = Ext.getCmp('objectDetail');
            	console.log(detail);
            	detail.setRecord(record);
                
            }
        }
    }
});