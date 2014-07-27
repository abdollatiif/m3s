Ext.define('m3s.view.Notes', {

    extend: 'Ext.Container',
    
    xtype: 'notes',
    
	config: {

        scrollable: 'vertical',
        
        tpl: Ext.create('Ext.XTemplate','<fb:comments href="http://m3s.herokuapp.com//comments" numposts="5" colorscheme="dark"></fb:comments>')
    }
});
