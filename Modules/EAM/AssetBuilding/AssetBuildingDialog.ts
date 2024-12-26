
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetBuildingDialog extends Serenity.EntityDialog<AssetBuildingRow, any> {
        protected getFormKey() { return AssetBuildingForm.formKey; }
        protected getIdProperty() { return AssetBuildingRow.idProperty; }
        protected getLocalTextPrefix() { return AssetBuildingRow.localTextPrefix; }
        protected getNameProperty() { return AssetBuildingRow.nameProperty; }
        protected getService() { return AssetBuildingService.baseUrl; }
        protected getDeletePermission() { return AssetBuildingRow.insertPermission; }