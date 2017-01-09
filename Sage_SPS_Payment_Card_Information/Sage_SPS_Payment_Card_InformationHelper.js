({
	billingAddressCheckbox : function(component, event, helper)
    {
        var is_same = component.get('v.is_same_billing_address');
        if(is_same === true)
        	component.set('v.is_same_billing_address', false);
        else
            component.set('v.is_same_billing_address', true);
    },
    edit : function(component, event, helper)
    {
        component.set('v.is_edit', true);
    },
    save : function(component, event, helper)
    {
        component.set('v.is_edit', false);
        var expiration_date = component.find('InputSelectMonth').get('v.value') + '/' + component.find('InputSelectYear').get('v.value');
        component.set('v.expiration_date', expiration_date);
    },
    primary : function(component, event, helper)
    {
        var is_primary = component.get('v.is_primary');
        if(is_primary === true)
            component.set('v.is_primary', false);
        else
            component.set('v.is_primary', true);
    }
})