
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsMaintCondationGrid extends Serenity.EntityGrid<AssetsMaintCondationRow, any> {
        protected getColumnsKey() { return 'EAM.AssetsMaintCondation'; }
        protected getDialogType() { return AssetsMaintCondationDialog; }
        protected getIdProperty() { return AssetsMaintCondationRow.idProperty; }
        protected getInsertPermission() { return AssetsMaintCondationRow.insertPermission; }