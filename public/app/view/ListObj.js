
Ext.define('m3s.view.ListObj', {

	extend: 'Ext.List',
	
	layout: 'fit',
	
	xtype: 'listobj',

	config: {

		store: 'Objects',
		
		itemTpl: Ext.create('Ext.XTemplate','{json}')
		
	}

});
