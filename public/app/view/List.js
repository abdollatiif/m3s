
Ext.define('m3s.view.List', {

	extend: 'Ext.List',
		
	xtype: 'objectList',
	
	fullscreen: true,
	
	grouped: true,
	
	config: {
				
		listeners: {
		
			itemtap: function(dataview, index, target, record, evt) {
				this.fireEvent('tapObject', record, el);
			}
		},

		store: 'Objects',
		
		itemTpl: Ext.create('Ext.XTemplate','{title}')
		
	}

});
