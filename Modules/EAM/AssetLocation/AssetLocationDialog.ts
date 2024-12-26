
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetLocationDialog extends Serenity.EntityDialog<AssetLocationRow, any> {
        protected getFormKey() { return AssetLocationForm.formKey; }
        protected getIdProperty() { return AssetLocationRow.idProperty; }
        protected getLocalTextPrefix() { return AssetLocationRow.localTextPrefix; }
        protected getNameProperty() { return AssetLocationRow.nameProperty; }
        protected getService() { return AssetLocationService.baseUrl; }
        protected getDeletePermission() { return AssetLocationRow.insertPermission; }