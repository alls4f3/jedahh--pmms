
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsMaintCondationDialog extends Serenity.EntityDialog<AssetsMaintCondationRow, any> {
        protected getFormKey() { return AssetsMaintCondationForm.formKey; }
        protected getIdProperty() { return AssetsMaintCondationRow.idProperty; }
        protected getLocalTextPrefix() { return AssetsMaintCondationRow.localTextPrefix; }
        protected getNameProperty() { return AssetsMaintCondationRow.nameProperty; }
        protected getService() { return AssetsMaintCondationService.baseUrl; }
        protected getDeletePermission() { return AssetsMaintCondationRow.insertPermission; }