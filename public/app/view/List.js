
Ext.define('m3s.view.List', {

	extend: 'Ext.List',
	
	xtype: 'listObjects',

	config: {

		store: 'Objects',

		itemCls: 'expandedObjects',        
		
		itemTpl: '{json}',
	},

});
