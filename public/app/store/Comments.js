Ext.define('m3s.store.Comments', {
	
	extend  : 'Ext.data.Store',
	
	requires: [
	    'Ext.data.proxy.JsonP'
	],
    
	config: {
    	
        model: 'm3s.model.Comment',
        
        sorters: 'date',
        
        grouper: {
            groupFn: function(record) {
            	return record.get('date');
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