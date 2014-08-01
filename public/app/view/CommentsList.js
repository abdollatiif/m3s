
Ext.define('m3s.view.CommentsList', {

	extend: 'Ext.List',
		
	xtype: 'commentsList',
			
	config: {
				
		listeners: {
		
			itemtap: function(dataview, index, target, record, evt) {
				this.fireEvent('tapCommentsList', record, Ext.get(evt.target));
			}
		},

		store: 'Comments',
		
		grouped: true,
		
		itemTpl: Ext.create('Ext.XTemplate','{comment}')
		
	}

});