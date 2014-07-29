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
            xtype: ''
        },
        
        listeners: {
            
            leafitemtap: function(nestedList, list, index, target, record) {
            	
            	 if (!this.objectDetailCmp) {
                     this.objectDetailCmp = Ext.widget('objectDetail');
                     this.objectDetailCmp.setRecord(record);
                 }

                var detailCard = nestedList.getDetailCard();
                
                detailCard.setXtype('objectDetail');
                
                //detailCard = this.objectDetailCmp;
                //detailCard.setHtml('You selected: ' + record.get('text'));
            }
        }
    }
});