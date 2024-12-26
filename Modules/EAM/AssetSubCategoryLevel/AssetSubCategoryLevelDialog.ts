
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetSubCategoryLevelDialog extends Serenity.EntityDialog<AssetSubCategoryLevelRow, any> {
        protected getFormKey() { return AssetSubCategoryLevelForm.formKey; }
        protected getIdProperty() { return AssetSubCategoryLevelRow.idProperty; }
        protected getLocalTextPrefix() { return AssetSubCategoryLevelRow.localTextPrefix; }
        protected getNameProperty() { return AssetSubCategoryLevelRow.nameProperty; }
        protected getService() { return AssetSubCategoryLevelService.baseUrl; }
        protected getDeletePermission() { return AssetSubCategoryLevelRow.insertPermission; }