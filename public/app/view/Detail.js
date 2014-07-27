Ext.define('m3s.view.Detail', {

    extend: 'Ext.Container',
    
    xtype: 'objectDetail',
    
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
                        cls: 'shareBtn',
                        iconCls: 'shareBtn',
                        id: 'objectShareButton',
                        align: 'right'
                    }
                ]
            },
            {
            	 xtype: 'toolbar',
                 docked: 'bottom',
                 scrollable: {
                     direction: 'horizontal',
                     directionLock: true
                 },
                 items: [

					{
						xtype: 'textfield',
						name: 'comment',
						label: 'Comment',
						width: '80%'
					},
					{
						text: 'Submit',
						ui: 'confirm',
						align: 'right',
						scope: this,
						handler: function() {
							var form = this.form;
								
							form.submit({
								   url: 'user.json',
								   waitMsg: 'Saving User...'
							});
						}
					}
                 ]
            }
        ],
        
        tpl: Ext.create('Ext.XTemplate',
        		'<div>{content}</div>'       
        )
    }
});
