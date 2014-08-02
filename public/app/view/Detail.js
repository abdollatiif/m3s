Ext.define('m3s.view.Detail', {

    extend: 'Ext.Container',
    
    xtype: 'objectDetail',
    
    id: 'objectDetail',
    
    requires: ['Ext.form.*'],
    
	config: {

        scrollable: 'vertical',

        items: [
            {
            	 xtype: 'toolbar',
                 docked: 'bottom',
                 items: [

					{
						xtype: 'textfield',
						name: 'comment',
						width: '80%',
						id: 'txtComment'
					},
					{
						text: 'Send',
						ui: 'confirm',
						align: 'right',
						width: '15%',
						id: 'submitBtn',
					}
                 ]
            }
        ],
        
        tpl: Ext.create('Ext.XTemplate',
        		'<div>{content}</div>'       
        )
    }
});
