Ext.define('m3s.view.Settings', {

    extend: 'Ext.Container',
    
    xtype: 'settings',
    
	config: {

        scrollable: 'vertical',
        
        tpl: Ext.create('Ext.XTemplate','Some texte in template')
    }
});
