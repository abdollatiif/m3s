Ext.define('m3s.view.Form', {
	
    extend: 'Ext.form.Panel',
    	
    xtype: 'objectForm',
    
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