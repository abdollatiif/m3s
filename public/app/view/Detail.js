Ext.define('m3s.view.Detail', {

    extend: 'Ext.Container',
    
    xtype: 'objectDetail',
    
    id: 'objectDetail',
    
    requires: ['Ext.form.*'],
    
	config: {

        scrollable: 'vertical',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                cls: 'small',
                items: [
                    {
                        xtype: 'button',
                        cls: 'backBtn',
                        iconCls: 'backBtn',
                        id: 'objectBackButton',
                        align: 'left'
                    },
                    {
                        xtype: 'button',
                        cls: 'commentBtn',
                        iconCls: 'commentBtn',
                        id: 'objectCommentButton',
                        align: 'right'
                    }
                ]
            },
            {
            	 xtype: 'toolbar',
                 docked: 'bottom',
                 items: [

					{
						xtype: 'textfield',
						name: 'comment',
						label: 'Comment',
						width: '80%',
						id: 'txtComment'
					},
					{
						text: 'Submit',
						ui: 'confirm',
						align: 'right',
						width: '15%',
						id: 'submitBtn',
					}
                 ]
            }
        ],
        
        tpl: Ext.create('Ext.XTemplate',
        		'<div>{text}</div>'       
        )
    }
});
