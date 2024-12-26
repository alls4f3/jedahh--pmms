
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetDistressDialog extends Serenity.EntityDialog<AssetDistressRow, any> {
        protected getFormKey() { return AssetDistressForm.formKey; }
        protected getIdProperty() { return AssetDistressRow.idProperty; }
        protected getLocalTextPrefix() { return AssetDistressRow.localTextPrefix; }
        protected getNameProperty() { return AssetDistressRow.nameProperty; }
        protected getService() { return AssetDistressService.baseUrl; }
        protected getDeletePermission() { return AssetDistressRow.insertPermission; }