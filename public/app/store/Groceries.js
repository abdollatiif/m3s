Ext.define('m3s.store.Groceries', {
    extend: 'Ext.data.TreeStore',
    config: {
        model: 'm3s.model.Grocery',
        defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'http://ism.ma/nested.php'
        },
        autoLoad: true,
        root: {
            text:'Articles'
        }
    }
});