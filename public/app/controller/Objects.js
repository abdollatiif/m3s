Ext.define('m3s.controller.Objects', {

    extend: 'Ext.app.Controller',
    
    init: function() {
    	var store = Ext.getStore('Objects');
    	store.load();
    }
    
});