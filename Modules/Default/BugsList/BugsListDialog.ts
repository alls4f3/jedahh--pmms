
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class BugsListDialog extends Serenity.EntityDialog<BugsListRow, any> {
        protected getFormKey() { return BugsListForm.formKey; }
        protected getIdProperty() { return BugsListRow.idProperty; }
        protected getLocalTextPrefix() { return BugsListRow.localTextPrefix; }
        protected getNameProperty() { return BugsListRow.nameProperty; }
        protected getService() { return BugsListService.baseUrl; }
        protected getDeletePermission() { return BugsListRow.insertPermission; }