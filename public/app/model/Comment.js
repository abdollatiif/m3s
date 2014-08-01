Ext.define('m3s.model.Comment', {
	
    extend: 'Ext.data.Model',

    config: {

        fields: [
            'id',
            'profile',
            'objectId',
            'json',
            'comment',
            'date'
        ]
    }
});
