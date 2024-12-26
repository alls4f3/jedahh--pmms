
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class ZoneDialog extends Serenity.EntityDialog<ZoneRow, any> {
        protected getFormKey() { return ZoneForm.formKey; }
        protected getIdProperty() { return ZoneRow.idProperty; }
        protected getLocalTextPrefix() { return ZoneRow.localTextPrefix; }
        protected getNameProperty() { return ZoneRow.nameProperty; }
        protected getService() { return ZoneService.baseUrl; }
        protected getDeletePermission() { return ZoneRow.insertPermission; }