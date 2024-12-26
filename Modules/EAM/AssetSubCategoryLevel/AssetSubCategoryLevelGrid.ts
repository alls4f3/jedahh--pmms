
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetSubCategoryLevelGrid extends Serenity.EntityGrid<AssetSubCategoryLevelRow, any> {
        protected getColumnsKey() { return 'EAM.AssetSubCategoryLevel'; }
        protected getDialogType() { return AssetSubCategoryLevelDialog; }
        protected getIdProperty() { return AssetSubCategoryLevelRow.idProperty; }
        protected getInsertPermission() { return AssetSubCategoryLevelRow.insertPermission; }