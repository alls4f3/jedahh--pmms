
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetLocationGrid extends Serenity.EntityGrid<AssetLocationRow, any> {
        protected getColumnsKey() { return 'EAM.AssetLocation'; }
        protected getDialogType() { return AssetLocationDialog; }
        protected getIdProperty() { return AssetLocationRow.idProperty; }
        protected getInsertPermission() { return AssetLocationRow.insertPermission; }