
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkOrderBugGrid extends Serenity.EntityGrid<WorkOrderBugRow, any> {
        protected getColumnsKey() { return 'Default.WorkOrderBug'; }
        protected getDialogType() { return WorkOrderBugDialog; }
        protected getIdProperty() { return WorkOrderBugRow.idProperty; }
        protected getInsertPermission() { return WorkOrderBugRow.insertPermission; }
    }
}