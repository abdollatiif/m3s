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

        items: [
            {
                xtype: 'commentsList'
                
            }
        ]
    }
});
