Ext.define('m3s.store.Comments', {
	
	extend  : 'Ext.data.Store',
    
	config: {
    	
        model: 'm3s.model.Comment',
        
        sorters: 'date',
        
        grouper: {
            groupFn: function(record) {
            	return Ext.Date.format(record.get('date'), 'd M, Y');
            }
        },
        
        proxy: {
            type: 'jsonp',
            url: '/comments',

            reader: {
                type: 'json',
                rootProperty: 'comments'
            }
        },
        
        autoLoad: true
        
    }
});