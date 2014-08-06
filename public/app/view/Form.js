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
        	        	  name : 'nextSibling',
        	        	  label: 'Choose Next Sibling',
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
        	          },
        	          {
        	        	  xtype: 'textfield',
        	        	  name : 'seq',
        	        	  label: 'Sequence'
        	          },
        	          {
        	        	  xtype: 'textfield',
        	        	  name : 'idp',
        	        	  label: 'Parent'
        	          },
        	          {
        	        	  xtype: 'textfield',
        	        	  name : 'level',
        	        	  label: 'Level'
        	          },
        	          {
        	        	  xtype: 'textareafield',
        	        	  label: 'Siblings',
        	        	  maxRows: 4,
        	        	  name: 'sibling'
        	          },
        	          {
        	        	  xtype: 'textareafield',
        	        	  label: 'idsc',
        	        	  maxRows: 4,
        	        	  name: 'Children'
        	          }
        	  ]
        }]
        
    }
    	
});