
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkOrderEmergencyDialog extends Serenity.EntityDialog<WorkOrderEmergencyRow, any> {
        protected getFormKey() { return WorkOrderEmergencyForm.formKey; }
        protected getIdProperty() { return WorkOrderEmergencyRow.idProperty; }
        protected getLocalTextPrefix() { return WorkOrderEmergencyRow.localTextPrefix; }
        protected getNameProperty() { return WorkOrderEmergencyRow.nameProperty; }
        protected getService() { return WorkOrderEmergencyService.baseUrl; }
        protected getDeletePermission() { return WorkOrderEmergencyRow.insertPermission; }