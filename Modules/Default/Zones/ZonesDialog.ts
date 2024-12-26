
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class ZonesDialog extends Serenity.EntityDialog<ZonesRow, any> {
        protected getFormKey() { return ZonesForm.formKey; }
        protected getIdProperty() { return ZonesRow.idProperty; }
        protected getLocalTextPrefix() { return ZonesRow.localTextPrefix; }
        protected getNameProperty() { return ZonesRow.nameProperty; }
        protected getService() { return ZonesService.baseUrl; }
        protected getDeletePermission() { return ZonesRow.insertPermission; }
    }
}