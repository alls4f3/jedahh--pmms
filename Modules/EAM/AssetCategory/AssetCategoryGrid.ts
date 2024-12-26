

namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetCategoryGrid extends Serenity.EntityGrid<AssetCategoryRow, any> {
        protected getColumnsKey() { return 'EAM.AssetCategory'; }
        protected getDialogType() { return AssetCategoryDialog; }
        protected getIdProperty() { return AssetCategoryRow.idProperty; }
        protected getInsertPermission() { return AssetCategoryRow.insertPermission; }

       
    }
}