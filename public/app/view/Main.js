Ext.define('m3s.view.Main', {
	
    extend: 'Ext.tab.Panel',
    
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'm3s.view.ListObj'
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
                    	docked: 'top',
                    	xtype: 'titlebar',
                    	title: 'List of Objects'
                	},
                	{
                        xtype: 'listobj'
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
                        xtype: 'listobj',
                    }
                ]
            }
        ]
    }
});
