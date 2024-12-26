
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class AreasDialog extends Serenity.EntityDialog<AreasRow, any> {
        protected getFormKey() { return AreasForm.formKey; }
        protected getIdProperty() { return AreasRow.idProperty; }
        protected getLocalTextPrefix() { return AreasRow.localTextPrefix; }
        protected getNameProperty() { return AreasRow.nameProperty; }
        protected getService() { return AreasService.baseUrl; }
        protected getDeletePermission() { return AreasRow.insertPermission; }
    }
}