Ext.define('m3s.view.Notes', {
	
    extend: 'Ext.NestedList',
    
    xtype: 'notes',
    
    config: {
        fullscreen: true,
        title: 'Articles',
        displayField: 'text',
        store: 'Groceries',
        style: {
        	display: 'block !important'
        }
    }
});