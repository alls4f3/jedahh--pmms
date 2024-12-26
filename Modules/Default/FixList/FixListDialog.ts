
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class FixListDialog extends Serenity.EntityDialog<FixListRow, any> {
        protected getFormKey() { return FixListForm.formKey; }
        protected getIdProperty() { return FixListRow.idProperty; }
        protected getLocalTextPrefix() { return FixListRow.localTextPrefix; }
        protected getNameProperty() { return FixListRow.nameProperty; }
        protected getService() { return FixListService.baseUrl; }
        protected getDeletePermission() { return FixListRow.insertPermission; }