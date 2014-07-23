Ext.define('m3s.controller.Objects', {

    extend: 'Ext.app.Controller',
    
    init: function() {
    	m3s.view.ListObj.addXtype('listobj');
    }
    
});