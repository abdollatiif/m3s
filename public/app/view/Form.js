Ext.define('m3s.view.Form', {
	
    extend: 'Ext.form.Panel',
    	
    xtype: 'objectForm',
    
    requires: [
       'Ext.field.Email',
       'Ext.field.Password'
    ],
    
    config: {
    	
    	items: [{
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Name'
                },
                {
                    xtype: 'emailfield',
                    name : 'email',
                    label: 'Email'
                },
                {
                    xtype: 'passwordfield',
                    name : 'password',
                    label: 'Password'
                }
            ]
        }]
        
    }
    	
});