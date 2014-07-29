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
            html: 'You are viewing the detail card!'
        },
        
        listeners: {
            
            leafitemtap: function(nestedList, list, index, target, record) {
                var detailCard = nestedList.getDetailCard();
                detailCard.setHtml('You selected: ' + record.get('text'));
            }
        }
    }
});