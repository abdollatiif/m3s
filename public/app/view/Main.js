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
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                  /*{
                	  docked: 'top',
                	  xtype: 'titlebar',
                	  title: 'List of Objects'
                  },*/
                  { 
                	  xtype: 'listObjects'
                  }
                ]
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                    	xtype: 'listObjects'
                    }
                ]
            }
        ]
    }
});
