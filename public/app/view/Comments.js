Ext.define('m3s.view.Comments', {
    extend: 'Ext.Panel',
    xtype: 'comments',

    requires: [
        'Ext.carousel.Carousel'
    ],

    config: {

    	modal: true,
        centered : false,
        hideOnMaskTap : true,
        
        cls:'float-panel',

        width: 400,
        top: 0,
        bottom: 0,
        right: 0,

        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                xtype: 'carousel',
                flex: 1,
                items: [
                    { html : 'Item 1', style: 'background-color: #5E99CC' },
                    { html : 'Item 2', style: 'background-color: #759E60' }
                ]
            }
        ]
    },

    hide: function(animation) {
        var me = this;

        me.fireEvent('hideanimationstart', me);

        me.callParent();
    },
});
