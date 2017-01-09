({
    fullPayment : function(component, event, helper)
    {
        console.log("FullPayment");
        console.log(document.querySelector('input[name="options"]:checked').value);
		var is_full = component.get("v.is_full_payment");
        // component.set("v.is_full_payment", true);

        var full_payment = component.find('show_full_payment');
        var partial_payment = component.find('show_partial_payment');
        $A.util.removeClass(full_payment, 'slds-hide');
        $A.util.addClass(partial_payment, 'slds-hide');
	},
	partialPayment : function(component, event, helper)
    {
        console.log("PartialPayment");
        console.log(document.querySelector('input[name="options"]:checked').value);
		var is_full = component.get("v.is_full_payment");
        // component.set("v.is_full_payment", false);

        var full_payment = component.find('show_full_payment');
        var partial_payment = component.find('show_partial_payment');
        $A.util.removeClass(partial_payment, 'slds-hide');
        $A.util.addClass(full_payment, 'slds-hide');
	},
    pay : function(component, event, helper)
    {
        console.log("CONFIRM");
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:Sage_SPS_Payment_confirm",
            componentAttributes: {
                invoice_amount : component.get("v.invoice_amount"),
                invoice_total : component.get("v.invoice_total"),
                is_full_payment : component.get("v.is_full_payment")
            }
        });
        evt.fire();
    },
    cancel : function(component, event, helper)
    {
        console.log("IN THE CANCEL HELPER METHOD");
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:Sage_SPS_Payment",
            componentAttributes: {
                invoice_amount : component.get("v.invoice_amount"),
                invoice_total : component.get("v.invoice_total")
            }
        });
        evt.fire();
    },
    confirm : function(component, event, helper)
    {
        console.log('invoice_amount: ' + component.get("v.invoice_amount"));
        console.log('partial_amount: ' + component.get("v.partial_amount"));
        console.log('-----------BEFORE CALCULATION---------------');

        var partial_amount = component.get("v.partial_amount");
        var total_invoice = component.get("v.invoice_total");
        var balance_due = total_invoice - partial_amount;
        //component.set('v.invoice_amount', total_invoice);
        component.set('v.invoice_total', partial_amount);
        component.set('v.partial_amount', partial_amount);
        component.set('v.balance_due', balance_due);

        console.log('invoice_amount: ' + component.get("v.invoice_amount"));
        console.log('partial_amount: ' + component.get("v.partial_amount"));
        console.log('invoice_total: ' + component.get("v.invoice_total"));
        console.log('balance_due: ' + component.get("v.balance_due"));

        this.partialPayment(component, event, helper);
        console.log('HAS partialPayment run?');
    }
})