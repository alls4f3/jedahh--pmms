
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetBuildingGrid extends Serenity.EntityGrid<AssetBuildingRow, any> {
        protected getColumnsKey() { return 'EAM.AssetBuilding'; }
        protected getDialogType() { return AssetBuildingDialog; }
        protected getIdProperty() { return AssetBuildingRow.idProperty; }
        protected getInsertPermission() { return AssetBuildingRow.insertPermission; }