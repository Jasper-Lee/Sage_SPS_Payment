({
    edit : function(component, event, helper)
    {
        component.set('v.is_edit', true);
    },

    save : function(component, event, helper)
    {

//        var billing_info = { company: '', account: '', address: '', phone: '', email: '' }
//
//        for(var key in billing_info)
//        {
//            var comp = component.find(key);
//            if(comp != null)
//            {
//                var fieldValue = comp.get('v.value');
//                billing_info[key] = fieldValue;
//                //console.log(company[key]);
//            }
//        }
//
//        var action = component.get("c.saveFields");
//        action.setParams({ 'company_map': company });
//
//        action.setCallback(this, function(actionResult) {
//           var result = actionResult.getReturnValue();
//           //console.log('RESULT: ' + result);
//        });
//
//        $A.enqueueAction(action);
        component.set('v.is_edit', false);
    },

    saveCancel : function(component, event, helper)
    {
        component.set('v.is_edit', false);
    },

    formLoad : function(component, event, helper)
    {
//        component.set('v.show_content', false);
//        var action = component.get("c.getMyComp");
////      var fields = [ 'company_name', 'address', 'user_name', 'email_address', 'phone' ];
//
//        action.setCallback(this, function(actionResult) {
//
//            var result = actionResult.getReturnValue();
//
//            component.set("v.company_name", result.company_name__c);
//            component.set("v.address", result.address__c);
//            component.set("v.user_name", result.user_name__c);
//            component.set("v.email_address", result.email_address__c);
//            component.set("v.phone", result.phone__c);
//
////            for(var field in fields)
////            {
////                component.set("v." + field, "result." + field + "__c");
////            }
//
//            component.set('v.show_content', true);
//        });
//
//        $A.enqueueAction(action);
    }
})