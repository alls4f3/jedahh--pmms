
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetStatusGrid extends Serenity.EntityGrid<AssetStatusRow, any> {
        protected getColumnsKey() { return 'EAM.AssetStatus'; }
        protected getDialogType() { return AssetStatusDialog; }
        protected getIdProperty() { return AssetStatusRow.idProperty; }
        protected getInsertPermission() { return AssetStatusRow.insertPermission; }