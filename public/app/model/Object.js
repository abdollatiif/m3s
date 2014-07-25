/**
 * Object definition
 */
Ext.define('m3s.model.Object', {
	
    extend: 'Ext.data.Model',

    config: {

        fields: [
            'id',
            'json',
            'idsc',
            'idp',
            'title',
            'content'
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
