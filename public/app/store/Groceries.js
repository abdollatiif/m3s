Ext.define('m3s.store.Groceries', {
	
    extend: 'Ext.data.TreeStore',
    
    config: {
    	
        model: 'm3s.model.Grocery',
        
        defaultRootProperty: 'items',
        
        proxy: {
            type: 'ajax',
            url: '/groceries'
        },
        
        autoLoad: true,

    }
});