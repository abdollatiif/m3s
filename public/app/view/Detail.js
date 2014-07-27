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
            }
        ],
        
        tpl: Ext.create('Ext.XTemplate',
        		'<div>{content}</div>',
        		'</br>',
        		'<div class="fb-comments" data-href="http://m3s.herokuapp.com" data-numposts="3" data-colorscheme="dark">',
        			'<fb:comments num_posts="5" width="620" mobile="false" notify="true" href="http://m3s.herokuapp.com" fb-xfbml-state="rendered" class="fb_iframe_widget">',
        				'<span style="height: 252px; width: 620px;">',
        					'<iframe id="f87914cb8" name="f257d8f97" scrolling="no" title="Facebook Social Plugin" class="fb_ltr" src="http://m3s.herokuapp.com/comments" style="border: none; overflow: hidden; height: 252px; width: 620px;"></iframe>',
        				'</span>',
        			'</fb:comments>',
        		'</div>'        
        )
    }
});
