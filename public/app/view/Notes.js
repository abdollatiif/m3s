Ext.define('m3s.view.Notes', {

    extend: 'Ext.Container',
    
    xtype: 'notes',
    
	config: {

        scrollable: 'vertical',
        
        tpl: Ext.create('Ext.XTemplate','Notes')
    }
});
