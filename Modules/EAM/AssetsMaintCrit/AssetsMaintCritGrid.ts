
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsMaintCritGrid extends Serenity.EntityGrid<AssetsMaintCritRow, any> {
        protected getColumnsKey() { return 'EAM.AssetsMaintCrit'; }
        protected getDialogType() { return AssetsMaintCritDialog; }
        protected getIdProperty() { return AssetsMaintCritRow.idProperty; }
        protected getInsertPermission() { return AssetsMaintCritRow.insertPermission; }