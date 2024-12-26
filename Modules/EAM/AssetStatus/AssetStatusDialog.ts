
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetStatusDialog extends Serenity.EntityDialog<AssetStatusRow, any> {
        protected getFormKey() { return AssetStatusForm.formKey; }
        protected getIdProperty() { return AssetStatusRow.idProperty; }
        protected getLocalTextPrefix() { return AssetStatusRow.localTextPrefix; }
        protected getNameProperty() { return AssetStatusRow.nameProperty; }
        protected getService() { return AssetStatusService.baseUrl; }
        protected getDeletePermission() { return AssetStatusRow.insertPermission; }