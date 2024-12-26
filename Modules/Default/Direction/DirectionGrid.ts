
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class DirectionGrid extends Serenity.EntityGrid<DirectionRow, any> {
        protected getColumnsKey() { return 'Default.Direction'; }
        protected getDialogType() { return DirectionDialog; }
        protected getIdProperty() { return DirectionRow.idProperty; }
        protected getInsertPermission() { return DirectionRow.insertPermission; }
    }
}