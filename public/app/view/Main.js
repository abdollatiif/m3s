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
                  {
                	  docked: 'top',
                	  xtype: 'titlebar',
                	  title: 'Welcome to Sencha Touch 2'
                  },
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
                        xtype: 'video',
                        url: 'http://www.youtube.com/watch?v=fLjU3alAhe4',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
