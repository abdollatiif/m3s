Ext.define('m3s.model.Grocery', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
			{
				name: 'seq',
				type: 'integer'
			},
			{
				name: 'nextSibling',
				type: 'integer'
			},
            {
            	name: 'text',
            	type: 'string'
        	},
        	{
        		name: 'content',
            	type: 'string'
        	},
        	{
        		name: 'meta',
        		type: 'string'
        	},
        	{
        		name: 'json',
        		type: 'string'
        	},
        	{
            	name: 'idp',
            	type: 'integer'
        	},
        	{
            	name: 'idsc',
            	type: 'string'
        	},
        	{
            	name: 'level',
            	type: 'integer'
        	},
        	{
            	name: 'sibling',
            	type: 'string'
        	},
        ]
    }
});