
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetServiceStatusGrid extends Serenity.EntityGrid<AssetServiceStatusRow, any> {
        protected getColumnsKey() { return 'EAM.AssetServiceStatus'; }
        protected getDialogType() { return AssetServiceStatusDialog; }
        protected getIdProperty() { return AssetServiceStatusRow.idProperty; }
        protected getInsertPermission() { return AssetServiceStatusRow.insertPermission; }