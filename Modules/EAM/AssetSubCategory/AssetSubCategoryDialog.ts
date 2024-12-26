
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetSubCategoryDialog extends Serenity.EntityDialog<AssetSubCategoryRow, any> {
        protected getFormKey() { return AssetSubCategoryForm.formKey; }
        protected getIdProperty() { return AssetSubCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return AssetSubCategoryRow.localTextPrefix; }
        protected getNameProperty() { return AssetSubCategoryRow.nameProperty; }
        protected getService() { return AssetSubCategoryService.baseUrl; }
        protected getDeletePermission() { return AssetSubCategoryRow.insertPermission; }