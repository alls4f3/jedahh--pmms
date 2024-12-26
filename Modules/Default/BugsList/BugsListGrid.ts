
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class BugsListGrid extends Serenity.EntityGrid<BugsListRow, any> {
        protected getColumnsKey() { return 'Default.BugsList'; }
        protected getDialogType() { return BugsListDialog; }
        protected getIdProperty() { return BugsListRow.idProperty; }
        protected getInsertPermission() { return BugsListRow.insertPermission; }