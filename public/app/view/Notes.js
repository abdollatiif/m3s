Ext.define('m3s.view.Notes', {
	
    extend: 'Ext.NestedList',
    
    xtype: 'notes',
    
    id: 'notes',
    
    config: {
        fullscreen: true,
        title: 'Articles',
        displayField: 'text',
        store: 'Groceries',
        cls: 'nestedArticles'
    }
});