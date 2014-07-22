/**
 * Object definition
 */
Ext.define('m3s.model.Object', {
	
    extend: 'Ext.data.Model',

    config: {

        idProperty : "id",

        fields: [
            'id',
            'json',
            'idp',
            'idsc',
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
