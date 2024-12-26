
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class RoadsGrid extends Serenity.EntityGrid<RoadsRow, any> {
        protected getColumnsKey() { return 'Default.Roads'; }
        protected getDialogType() { return RoadsDialog; }
        protected getIdProperty() { return RoadsRow.idProperty; }
        protected getInsertPermission() { return RoadsRow.insertPermission; }
    }
}