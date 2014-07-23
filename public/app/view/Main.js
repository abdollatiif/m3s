Ext.define('m3s.view.Main', {
	
    extend: 'Ext.Container',
    
    xtype: 'main',
    
    requires: [
        'm3s.view.ListObj'
    ],
    
    config: {
        items: [
            {
                xtype: 'listobj'
            }
        ]
    }
});
