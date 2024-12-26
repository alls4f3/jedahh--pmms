
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkorderItemStatusDialog extends Serenity.EntityDialog<WorkorderItemStatusRow, any> {
        protected getFormKey() { return WorkorderItemStatusForm.formKey; }
        protected getIdProperty() { return WorkorderItemStatusRow.idProperty; }
        protected getLocalTextPrefix() { return WorkorderItemStatusRow.localTextPrefix; }
        protected getNameProperty() { return WorkorderItemStatusRow.nameProperty; }
        protected getService() { return WorkorderItemStatusService.baseUrl; }
        protected getDeletePermission() { return WorkorderItemStatusRow.insertPermission; }