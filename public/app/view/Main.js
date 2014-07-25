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

                items: [ 
                	{
                    	docked: 'top',
                    	xtype: 'titlebar',
                    	title: 'List of Objects'
                	},
                	{
                		xtype: 'objlist'
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
                        xtype: 'objlist'
                    }
                ]
            }
        ]
    }
});
