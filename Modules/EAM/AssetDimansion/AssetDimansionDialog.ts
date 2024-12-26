
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetDimansionDialog extends Serenity.EntityDialog<AssetDimansionRow, any> {
        protected getFormKey() { return AssetDimansionForm.formKey; }
        protected getIdProperty() { return AssetDimansionRow.idProperty; }
        protected getLocalTextPrefix() { return AssetDimansionRow.localTextPrefix; }
        protected getNameProperty() { return AssetDimansionRow.nameProperty; }
        protected getService() { return AssetDimansionService.baseUrl; }
        protected getDeletePermission() { return AssetDimansionRow.insertPermission; }