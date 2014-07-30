Ext.define('m3s.view.Notes', {
	
    extend: 'Ext.NestedList',
    
    xtype: 'notes',
    
    id: 'notes',
    
    config: {
    	
        fullscreen: true,
        
        variableHeights: true,
        
        title: 'Articles',
        
        listConfig          : {
            itemTpl: '{text}'
        }, 
        
        store: 'Groceries',
        
        cls: 'nestedArticles',
        
        detailCard: {
            xtype: 'objectDetail'
        },
        
        listeners: {
            
            leafitemtap: function(nestedList, list, index, target, record) {          	
            	var detail = Ext.getCmp('objectDetail');
            	detail.setRecord(record);
                
            }
        }
    }
});