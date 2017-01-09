({
    continuePayment : function(component, event, helper)
    {
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:Sage_SPS_Payment_ref",
            componentAttributes: {
                invoice_amount : component.get("v.invoice_amount"),
                invoice_total : component.get("v.invoice_total"),
                address : component.get("v.address")
            }
        });
        evt.fire();
    }
})