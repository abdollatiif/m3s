Ext.define('m3s.view.Notes', {
	
    extend: 'Ext.NestedList',
    
    xtype: 'notes',
    
    id: 'notes',
    
    config: {
        fullscreen: true,
        title: 'Articles',
        listConfig          : {
            itemTpl: '{text}'
        }, 
        detailCard: {
            html: 'You can see detail information here! <i>{text}</i>'
        },
        store: 'Groceries',
        cls: 'nestedArticles'
    }
});