({
    confirmation: function(component, event, helper) {
        var is_full = component.get("v.is_full_payment");
        var full_payment = component.find('show_full_payment');
        var partial_payment = component.find('show_partial_payment');

        if(is_full)
        {
            $A.util.removeClass(full_payment, 'slds-hide');
            $A.util.addClass(partial_payment, 'slds-hide');
        }
        else
        {
            $A.util.addClass(full_payment, 'slds-hide');
            $A.util.removeClass(partial_payment, 'slds-hide');
        }


        // component.set('v.show_content', false);
        // var spinner = component.find('spinner');
        // spinner.handleToggle();
        //
        // var fields = [ 'name', 'vatNumber', 'postalCode', 'standardIndustrialCode' ]
        //
        // var action = component.get("c.GetOrganisationEnrollment");
        //
        // var self = this;
        // action.setCallback(this, function(actionResult) {
        //
        //     for(var key in metadata.company)
        //     {
        //         var comp = component.find(key);
        //
        //         if(comp != null) {
        //             comp.set('v.validation', metadata.company[key]);
        //         }
        //     }
        //
        //     if(metadata.terms != null) {
        //         var comp = component.find('terms');
        //
        //         if(comp != null) {
        //             comp.set('v.validation', metadata.terms);
        //         }
        //     }
        //
        //     var content = result.content;
        //
        //     if(content.organisationId != null && content.companyId != null) {
        //         // both org and this company are enrolled
        //         component.set('v.is_company_enrolled', true);
        //         component.set('v.is_edit', false);

    }
})