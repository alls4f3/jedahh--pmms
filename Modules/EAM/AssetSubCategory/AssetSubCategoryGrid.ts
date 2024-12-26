
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetSubCategoryGrid extends Serenity.EntityGrid<AssetSubCategoryRow, any> {
        protected getColumnsKey() { return 'EAM.AssetSubCategory'; }
        protected getDialogType() { return AssetSubCategoryDialog; }
        protected getIdProperty() { return AssetSubCategoryRow.idProperty; }
        protected getInsertPermission() { return AssetSubCategoryRow.insertPermission; }