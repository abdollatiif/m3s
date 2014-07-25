
Ext.define('m3s.view.List', {

	extend: 'Ext.List',
		
	xtype: 'objectList',
	
	fullscreen: true,

	config: {
				
		listeners: {
		
			itemtap: function(dataview, index, target, record, evt) {

				var        el = Ext.get(evt.target),
            		fireEvent = 'tapObject';

				m3s.currentObject = record;
            
				if (fireEvent) {
					this.fireEvent(fireEvent, record, el);
				}
			}
		},

		store: 'Objects',
		
		itemTpl: Ext.create('Ext.XTemplate','{values.title}')
		
	}

});
