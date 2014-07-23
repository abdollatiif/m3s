Ext.define('m3s.view.Main', {
	
    extend: 'Ext.tab.Panel',
    
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'm3s.view.List'
    ],
    
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Objects',
                
                iconCls: 'home',

                styleHtmlContent: true,
                
                scrollable: true,

                items: [
                  { 
                	  xtype: 'lsobjs'
                  }
                ]
            },
            {
                title: 'Notes',
                
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'List of Notes'
                    },
                    {
                    	html: '<p>listObjects</p>'
                    }
                ]
            }
        ]
    },
	
	initialize: function() {
		this.callParent(); 
	}
});
