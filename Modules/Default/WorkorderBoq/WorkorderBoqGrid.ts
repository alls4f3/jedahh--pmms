
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkorderBoqGrid extends Serenity.EntityGrid<WorkorderBoqRow, any> {
        protected getColumnsKey() { return 'Default.WorkorderBoq'; }
        protected getDialogType() { return WorkorderBoqDialog; }
        protected getIdProperty() { return WorkorderBoqRow.idProperty; }
        protected getInsertPermission() { return WorkorderBoqRow.insertPermission; }