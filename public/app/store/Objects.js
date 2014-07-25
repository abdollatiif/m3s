Ext.define('m3s.store.Objects', {
	
    extend  : 'Ext.data.Store',

    config: {
    	
        model: 'm3s.model.Object',
        
        sorters: 'sorter',
        
        grouper: {
            groupFn: function(record) {
            	var json = Ext.JSON.decode(record.get('idp'));
            	return json.title;
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