
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkorderItemStatusGrid extends Serenity.EntityGrid<WorkorderItemStatusRow, any> {
        protected getColumnsKey() { return 'Default.WorkorderItemStatus'; }
        protected getDialogType() { return WorkorderItemStatusDialog; }
        protected getIdProperty() { return WorkorderItemStatusRow.idProperty; }
        protected getInsertPermission() { return WorkorderItemStatusRow.insertPermission; }