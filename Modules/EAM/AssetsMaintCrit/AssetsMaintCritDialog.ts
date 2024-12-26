
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsMaintCritDialog extends Serenity.EntityDialog<AssetsMaintCritRow, any> {
        protected getFormKey() { return AssetsMaintCritForm.formKey; }
        protected getIdProperty() { return AssetsMaintCritRow.idProperty; }
        protected getLocalTextPrefix() { return AssetsMaintCritRow.localTextPrefix; }
        protected getNameProperty() { return AssetsMaintCritRow.nameProperty; }
        protected getService() { return AssetsMaintCritService.baseUrl; }
        protected getDeletePermission() { return AssetsMaintCritRow.insertPermission; }