({
    handleFull : function(component, event, helper)
    {
		helper.fullPayment(component, event, helper);
	},
    handlePartial : function(component, event, helper)
    {
		helper.partialPayment(component, event, helper);
	},
    handlePay : function(component, event, helper)
    {
        helper.pay(component, event, helper);
    },
    handleCancel : function(component, event, helper)
    {
        helper.cancel(component, event, helper);
    },
    handleConfirm : function(component, event, helper)
    {
        helper.confirm(component, event, helper);
    }
})