
Ext.define('m3s.view.List', {

	extend: 'Ext.List',
	
	xtype: 'lsobjs',

	config: {

		store: 'Objects',
		
		itemTpl: Ext.create('Ext.XTemplate','{json}')
		
	}

});
