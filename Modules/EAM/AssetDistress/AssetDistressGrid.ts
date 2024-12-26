
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetDistressGrid extends Serenity.EntityGrid<AssetDistressRow, any> {
        protected getColumnsKey() { return 'EAM.AssetDistress'; }
        protected getDialogType() { return AssetDistressDialog; }
        protected getIdProperty() { return AssetDistressRow.idProperty; }
        protected getInsertPermission() { return AssetDistressRow.insertPermission; }