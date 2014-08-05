Ext.define('m3s.view.Form', {
	
    extend: 'Ext.form.Panel',
    	
    xtype: 'objectForm',
    
    requires: [
       'Ext.field.Select'
    ],
    
    config: {

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
                   },
                   {
                 	  align: 'right',
                 	  id: 'iconSave',
                 	  ui: 'confirm', 
                 	  text: 'Save'
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