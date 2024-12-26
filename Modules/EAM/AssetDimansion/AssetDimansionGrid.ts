
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetDimansionGrid extends Serenity.EntityGrid<AssetDimansionRow, any> {
        protected getColumnsKey() { return 'EAM.AssetDimansion'; }
        protected getDialogType() { return AssetDimansionDialog; }
        protected getIdProperty() { return AssetDimansionRow.idProperty; }
        protected getInsertPermission() { return AssetDimansionRow.insertPermission; }