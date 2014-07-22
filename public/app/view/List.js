
Ext.define('m3s.view.List', {

	extend: 'Ext.List',
	
	xtype: 'listObjects',

	config: {

		store: 'm3s.store.Objects',
		
		itemTpl: '{json}',
		
		//itemTpl: '{title}',
		/*
	    data: [
	        { title: 'Item 1' },
	        { title: 'Item 2' },
	        { title: 'Item 3' },
	        { title: 'Item 4' }
	    ]*/
	},

});
