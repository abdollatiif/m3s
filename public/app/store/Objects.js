Ext.define('m3s.store.Objects', {
	
    extend  : 'Ext.data.Store',

    config: {
    	
        model: 'm3s.model.Object',

        pageSize: 20,

        proxy: {
            type: 'jsonp',
            url: '/objects',

            reader: {
                type: 'json',
                rootProperty: 'objects'
            }
        }
    }
});