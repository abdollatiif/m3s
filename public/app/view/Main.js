Ext.define('m3s.view.Main', {
	
    extend: 'Ext.Container',
    
    xtype: 'main',
    
    requires: [
        'm3s.view.ListObj'
    ],
    
    config: {
    	layout: {
			type: 'card',
			animation: {
				type: 'fade'
			}
		},
		
        items: [
            {
                xtype: 'listobj'
            }
        ]
    }
});
