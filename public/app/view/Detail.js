Ext.define('m3s.view.Detail', {

    extend: 'Ext.Container',
    
    xtype: 'objectDetail',
    
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
                 
                 ]
            }
        ],
        
        tpl: Ext.create('Ext.XTemplate',
        		'<div>{content}</div>'       
        )
    }
});
