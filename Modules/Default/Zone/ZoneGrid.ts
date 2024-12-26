
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()

    export class ZoneGrid extends Serenity.EntityGrid<ZoneRow, any> {
        protected getColumnsKey() { return 'Default.Zone'; }
        protected getDialogType() { return ZoneDialog; }
        protected getIdProperty() { return ZoneRow.idProperty; }
        protected getInsertPermission() { return ZoneRow.insertPermission; }