
Ext.define('m3s.view.List', {

	extend: 'Ext.List',
		
	xtype: 'objectList',
	
	fullscreen: true,

	config: {

		store: 'Objects',
		
		itemTpl: Ext.create('Ext.XTemplate','{json}')
		
	}

});
