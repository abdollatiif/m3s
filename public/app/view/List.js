
Ext.define('m3s.view.List', {

	extend: 'Ext.List',
	
	xtype: 'lsobjs',

	config: {

		store: 'Objects',
		
		itemTpl: Ext.create('Ext.XTemplate','{json}')
		
		//itemTpl: '{title}',
		/*
	    data: [
	        { title: 'Item 1' },
	        { title: 'Item 2' },
	        { title: 'Item 3' },
	        { title: 'Item 4' }
	    ]*/
	}

});
