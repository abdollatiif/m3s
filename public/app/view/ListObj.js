
Ext.define('m3s.view.ListObj', {

	extend: 'Ext.List',	
	
	xtype: 'listobj',

	config: {
		
		layout: 'fit',

		store: 'Objects',
		
		itemTpl: Ext.create('Ext.XTemplate','{json}')
		
	}

});
