({
    /* invoiceDropdown : function(component, event, helper)
    {
        var card = component.find('invoice-card');

        if($A.util.hasClass(card, 'slds-is-open')) {
            $A.util.removeClass(card, 'slds-is-open');
        }
        else {
            $A.util.addClass(card, 'slds-is-open');
        }
    }, */
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

    cancel : function(component, event, helper)
    {
        component.set('v.is_edit', false);
    },

    formLoad : function(component, event, helper)
    {
        var action = component.get("c.getInvoice");
        console.log("In the init!!");
        action.setCallback(this, function(actionResult) {

            var result = actionResult.getReturnValue();
            console.log(result);
            console.log(JSON.parse(result));
            var obj = JSON.parse(result);
            console.log(obj.company);
            component.set("v.company", obj.company);
            component.set("v.address", obj.account);
            component.set("v.user_name", obj.address);
            component.set("v.email_address", obj.email);
            component.set("v.invoice_amount", obj.total);
            component.set("v.invoice_total", obj.total);
        });
        $A.enqueueAction(action);
    },
    continuePayment : function(component, event, helper)
    {
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:Sage_SPS_Payment_ref",
            componentAttributes: {
                invoice_amount : component.get("v.invoice_amount"),
                invoice_total : component.get("v.invoice_total")
            }
        });
        evt.fire();
	}

})