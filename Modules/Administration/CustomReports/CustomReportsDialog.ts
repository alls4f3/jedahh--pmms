
namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class CustomReportsDialog extends Serenity.EntityDialog<CustomReportsRow, any> {
        protected getFormKey() { return CustomReportsForm.formKey; }
        protected getIdProperty() { return CustomReportsRow.idProperty; }
        protected getLocalTextPrefix() { return CustomReportsRow.localTextPrefix; }
        protected getNameProperty() { return CustomReportsRow.nameProperty; }
        protected getService() { return CustomReportsService.baseUrl; }
        protected getDeletePermission() { return CustomReportsRow.insertPermission; }