
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class FixListGrid extends Serenity.EntityGrid<FixListRow, any> {
        protected getColumnsKey() { return 'Default.FixList'; }
        protected getDialogType() { return FixListDialog; }
        protected getIdProperty() { return FixListRow.idProperty; }
        protected getInsertPermission() { return FixListRow.insertPermission; }