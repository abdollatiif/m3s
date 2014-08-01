Ext.define('m3s.store.Comments', {
	
	extend  : 'Ext.data.Store',
    
	config: {
    	
        model: 'm3s.model.Comment',
        
        sorters: 'formattedDate',
        
        grouper: {
            groupFn: function(record) {
            	return record.get('formattedDate');
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