
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetServiceStatusDialog extends Serenity.EntityDialog<AssetServiceStatusRow, any> {
        protected getFormKey() { return AssetServiceStatusForm.formKey; }
        protected getIdProperty() { return AssetServiceStatusRow.idProperty; }
        protected getLocalTextPrefix() { return AssetServiceStatusRow.localTextPrefix; }
        protected getNameProperty() { return AssetServiceStatusRow.nameProperty; }
        protected getService() { return AssetServiceStatusService.baseUrl; }
        protected getDeletePermission() { return AssetServiceStatusRow.insertPermission; }
    }