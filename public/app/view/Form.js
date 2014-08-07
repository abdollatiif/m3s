Ext.define('m3s.view.Form', {
	
    extend: 'Ext.form.Panel',
    	
    xtype: 'objectForm',
    
    id: 'objectForm',
    
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
        	        	  id: 'nextSibling'
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
        	        	  checked: true
        	          },
        	          {
        	        	  xtype: 'textfield',
        	        	  name : 'seq',
        	        	  label: 'Sequence',
        	        	  hidden: true
        	          },
        	          {
        	        	  xtype: 'textfield',
        	        	  name : 'idp',
        	        	  label: 'Parent',
        	        	  hidden: true
        	          },
        	          {
        	        	  xtype: 'textfield',
        	        	  name : 'level',
        	        	  label: 'Level',
        	        	  hidden: true
        	          },
        	          {
        	        	  xtype: 'textareafield',
        	        	  label: 'Siblings',
        	        	  maxRows: 4,
        	        	  name: 'sibling',
        	        	  hidden: true
        	          },
        	          {
        	        	  xtype: 'textareafield',
        	        	  label: 'children',
        	        	  maxRows: 4,
        	        	  name: 'idsc',
        	        	  hidden: true
        	          }
        	  ]
        }]
        
    }
    	
});