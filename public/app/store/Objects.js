Ext.define('m3s.store.Objects', {
	
    extend  : 'Ext.data.Store',

    config: {
    	
        model: 'm3s.model.Object',
        
        /*
        proxy: {
            type: 'jsonp',
            url: '/objects',

            reader: {
                type: 'json',
                rootProperty: 'objects'
            }
        }
        */
        
        data: [
               { id: '1', json: 'Maintz 1', idsc: '2,3', idp: '0' },
               { id: '2', json: 'Maintz 2', idsc: '0', idp: '1' },
               { id: '3', json: 'Maintz 3', idsc: '0', idp: '1' }
       ]
    }
});