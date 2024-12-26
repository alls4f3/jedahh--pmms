
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetCategoryDialog extends Serenity.EntityDialog<AssetCategoryRow, any> {
        protected getFormKey() { return AssetCategoryForm.formKey; }
        protected getIdProperty() { return AssetCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return AssetCategoryRow.localTextPrefix; }
        protected getNameProperty() { return AssetCategoryRow.nameProperty; }
        protected getService() { return AssetCategoryService.baseUrl; }
        protected getDeletePermission() { return AssetCategoryRow.insertPermission; }
    }
}