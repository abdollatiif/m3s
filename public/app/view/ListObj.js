
Ext.define('m3s.view.ListObj', {

	extend: 'Ext.List',	
	
	xtype: 'listobj',

	config: {
		
		itemCls: 'expandedObject',

        itemHeight:114,

		store: 'Objects',
		
		itemTpl: Ext.create('Ext.XTemplate','{json}')
		
	}

});
