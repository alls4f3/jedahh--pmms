
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsTotalCalcGrid extends Serenity.EntityGrid<AssetsTotalCalcRow, any> {
        protected getColumnsKey() { return 'EAM.AssetsTotalCalc'; }
        protected getDialogType() { return AssetsTotalCalcDialog; }
        protected getIdProperty() { return AssetsTotalCalcRow.idProperty; }
        protected getInsertPermission() { return AssetsTotalCalcRow.insertPermission; }