
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsMaintSubSetDialog extends Serenity.EntityDialog<AssetsMaintSubSetRow, any> {
        protected getFormKey() { return AssetsMaintSubSetForm.formKey; }
        protected getIdProperty() { return AssetsMaintSubSetRow.idProperty; }
        protected getLocalTextPrefix() { return AssetsMaintSubSetRow.localTextPrefix; }
        protected getNameProperty() { return AssetsMaintSubSetRow.nameProperty; }
        protected getService() { return AssetsMaintSubSetService.baseUrl; }
        protected getDeletePermission() { return AssetsMaintSubSetRow.insertPermission; }