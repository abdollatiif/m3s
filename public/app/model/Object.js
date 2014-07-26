/**
 * Object definition
 */
Ext.define('m3s.model.Object', {
	
    extend: 'Ext.data.Model',

    config: {

        fields: [
            'id',
            'idp',
            'idsc',
            'json',
            'title',
            'content',
            'sorter'
        ],

        proxy: {
            type: 'jsonp',
            
            url: '/object',

            reader: {
                type: 'json',
                rootProperty: 'objects'
            }
        }
    }
});
