
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsMaintSubSetGrid extends Serenity.EntityGrid<AssetsMaintSubSetRow, any> {
        protected getColumnsKey() { return 'EAM.AssetsMaintSubSet'; }
        protected getDialogType() { return AssetsMaintSubSetDialog; }
        protected getIdProperty() { return AssetsMaintSubSetRow.idProperty; }
        protected getInsertPermission() { return AssetsMaintSubSetRow.insertPermission; }