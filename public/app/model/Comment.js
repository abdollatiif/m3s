Ext.define('m3s.model.Comment', {
	
    extend: 'Ext.data.Model',

    config: {

        fields: [
            'id',
            'profile',
            'objectId',
            'json',
            'comment',
            {
            	name: 'date',
                type: 'date',
                convert: function(v, record) {
                	console.log(v);
                	console.log(record);
                	var arr = record.data.date.split(/[- :T]/);
                	console.log(arr.toString());
                }
            }
        ]
    }
});
