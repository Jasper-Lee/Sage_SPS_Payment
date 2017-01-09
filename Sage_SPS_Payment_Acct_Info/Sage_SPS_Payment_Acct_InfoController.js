/**
 * Created by JLee on 10/20/2016.
 */
({
    handleEdit : function(component, event, helper) {
        helper.edit(component, event, helper);
    },
    handleSave : function(component, event, helper) {
        helper.save(component, event, helper);
    },
    handleSaveCancel : function(component, event, helper) {
        helper.saveCancel(component, event, helper);
    },
    handleFormLoad : function(component, event, helper) {
        helper.formLoad(component, event, helper);
    }
})