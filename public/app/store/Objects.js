Ext.define('m3s.store.Objects', {
	
    extend  : 'Ext.data.Store',

    config: {
    	
        model: 'm3s.model.Object',
        
        grouper: {
            groupFn: function(record) {
                return record.get('idp');
            }
        },
        
        proxy: {
            type: 'jsonp',
            url: '/objects',

            reader: {
                type: 'json',
                rootProperty: 'objects'
            }
        },
        
        autoLoad: true
        
    }
});