
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsSeverityGrid extends Serenity.EntityGrid<AssetsSeverityRow, any> {
        protected getColumnsKey() { return 'EAM.AssetsSeverity'; }
        protected getDialogType() { return AssetsSeverityDialog; }
        protected getIdProperty() { return AssetsSeverityRow.idProperty; }
        protected getInsertPermission() { return AssetsSeverityRow.insertPermission; }