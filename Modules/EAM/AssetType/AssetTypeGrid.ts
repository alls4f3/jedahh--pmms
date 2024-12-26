
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetTypeGrid extends Serenity.EntityGrid<AssetTypeRow, any> {
        protected getColumnsKey() { return 'EAM.AssetType'; }
        protected getDialogType() { return AssetTypeDialog; }
        protected getIdProperty() { return AssetTypeRow.idProperty; }
        protected getInsertPermission() { return AssetTypeRow.insertPermission; }