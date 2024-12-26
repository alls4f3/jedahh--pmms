
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkorderBoqDialog extends Serenity.EntityDialog<WorkorderBoqRow, any> {
        protected getFormKey() { return WorkorderBoqForm.formKey; }
        protected getIdProperty() { return WorkorderBoqRow.idProperty; }
        protected getLocalTextPrefix() { return WorkorderBoqRow.localTextPrefix; }
        protected getNameProperty() { return WorkorderBoqRow.nameProperty; }
        protected getService() { return WorkorderBoqService.baseUrl; }
        protected getDeletePermission() { return WorkorderBoqRow.insertPermission; }