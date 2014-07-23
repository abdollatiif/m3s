
Ext.define('m3s.view.ListObj', {

	extend: 'Ext.List',	

	config: {

		store: 'Objects',
		
		itemTpl: Ext.create('Ext.XTemplate','{json}')
		
	}

});
