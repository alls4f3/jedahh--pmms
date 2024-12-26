
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class SectionsDialog extends Serenity.EntityDialog<SectionsRow, any> {
        protected getFormKey() { return SectionsForm.formKey; }
        protected getIdProperty() { return SectionsRow.idProperty; }
        protected getLocalTextPrefix() { return SectionsRow.localTextPrefix; }
        protected getService() { return SectionsService.baseUrl; }
        protected getDeletePermission() { return SectionsRow.insertPermission; }
    }
}