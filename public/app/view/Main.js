Ext.define('m3s.view.Main', {
	
    extend: 'Ext.tab.Panel',
    
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'm3s.view.List',
        'm3s.view.Settings',
        'm3s.view.Notes'
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
                		xtype: 'objectList'
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
                        xtype: 'notes'
                    }
                ]
            },
            {
                title: 'Settings',
                iconCls: 'settings',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Settings'
                    },
                    {
                        xtype: 'settings'
                    }
                ]
            }
        ]
    }
});
