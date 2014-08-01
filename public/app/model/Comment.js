Ext.define('m3s.model.Comment', {
	
    extend: 'Ext.data.Model',

    config: {

        fields: [
            'id',
            'profile',
            'objectId',
            'json',
            'comment',
            'date',
            {
            	name: 'formattedDate',
                type: 'date',
                convert: function(v, record) {
                	var arr = record.data.date.split(/[- :T]/);
                	var date = new Date(arr[0], arr[1], arr[2]);
                	
                	return Ext.Date.format(date, 'M j, Y');
                }
            }
        ]
    }
});
