Ext.define('m3s.model.Grocery', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
            	name: 'text',
            	type: 'string'
        	},
        	{
        		name: 'json',
        		type: 'string'
        	}
        ]
    }
});