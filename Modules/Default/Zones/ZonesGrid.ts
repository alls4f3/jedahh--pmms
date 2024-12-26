
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ZonesGrid extends Serenity.EntityGrid<ZonesRow, any> {
        protected getColumnsKey() { return 'Default.Zones'; }
        protected getDialogType() { return ZonesDialog; }
        protected getIdProperty() { return ZonesRow.idProperty; }
        protected getInsertPermission() { return ZonesRow.insertPermission; }