
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetSubCalcGrid extends Serenity.EntityGrid<AssetSubCalcRow, any> {
        protected getColumnsKey() { return 'EAM.AssetSubCalc'; }
        protected getDialogType() { return AssetSubCalcDialog; }
        protected getIdProperty() { return AssetSubCalcRow.idProperty; }
        protected getInsertPermission() { return AssetSubCalcRow.insertPermission; }