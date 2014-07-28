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
                    	title: 'List of Objects',
                    	items: [
                    	    {
                    	    	xtype: 'component',
            		            cls: 'fbProfilePic',
            		            id: 'fbProfilePic',
            		            tpl: '<img src="https://graph.facebook.com/{profileId}/picture?type=square" />'
            		        }
                    	]
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
                        xtype: 'notes',
                        hidden: false
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
