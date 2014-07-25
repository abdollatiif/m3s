
Ext.define('m3s.view.List', {

	extend: 'Ext.List',
		
	xtype: 'objectList',
			
	config: {
				
		listeners: {
		
			itemtap: function(dataview, index, target, record, evt) {
				this.fireEvent('tapObject', record, Ext.get(evt.target));
			}
		},

		store: 'Objects',
		
		grouped: true,
		
		itemTpl: Ext.create('Ext.XTemplate','{title}')
		
	}

});
