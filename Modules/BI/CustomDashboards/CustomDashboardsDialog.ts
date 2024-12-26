
namespace PMMS.BI {

    @Serenity.Decorators.registerClass()
    export class CustomDashboardsDialog extends Serenity.EntityDialog<CustomDashboardsRow, any> {
        protected getFormKey() { return CustomDashboardsForm.formKey; }
        protected getIdProperty() { return CustomDashboardsRow.idProperty; }
        protected getLocalTextPrefix() { return CustomDashboardsRow.localTextPrefix; }
        protected getNameProperty() { return CustomDashboardsRow.nameProperty; }
        protected getService() { return CustomDashboardsService.baseUrl; }
        protected getDeletePermission() { return CustomDashboardsRow.insertPermission; }