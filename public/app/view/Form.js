Ext.define('m3s.view.Form', {
	
    extend: 'Ext.form.Panel',
    	
    xtype: 'objectForm',
    
    requires: [
       'Ext.field.Select'
    ],
    
    config: {
    	
    	listeners: {
            'initialize': function (form, eOpts) {
            	console.log(this);
            	console.log(this.getData());
            }
        },
    	
    	items: [
    	 {
               xtype: 'titlebar',
               docked: 'top',
               title: 'Creation new Node',
               items: [
                  {
                	  iconCls: 'arrow_left',
                	  align: 'left',
                	  id: 'iconBack'
                   }
               ] 	
          },
    	  {
        	  xtype: 'fieldset',
        	  items: [
        	          {
        	        	  xtype: 'selectfield',
        	        	  name : 'position',
        	        	  label: 'Choose Position',
        	        	  options: [
        	        	            {text: 'First Position', value: 'first'},
        	        	            {text: 'Last Position', value: 'last'}
        	        	  ]
        	          },
        	          {
        	        	  xtype: 'textareafield',
        	        	  label: 'Meta Data',
        	        	  maxRows: 4,
        	        	  name: 'meta'
        	          },
        	          {
        	        	  xtype: 'textareafield',
        	        	  label: 'Json Object',
        	        	  maxRows: 4,
        	        	  name: 'json'
        	          },
        	          {
        	        	  xtype: 'checkboxfield',
        	        	  name : 'leaf',
        	        	  label: 'Leaf?',
        	        	  checked: false
        	          }
        	  ]
        }]
        
    }
    	
});