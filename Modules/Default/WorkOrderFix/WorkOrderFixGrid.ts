
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkOrderFixGrid extends Serenity.EntityGrid<WorkOrderFixRow, any> {
        protected getColumnsKey() { return 'Default.WorkOrderFix'; }
        protected getDialogType() { return WorkOrderFixDialog; }
        protected getIdProperty() { return WorkOrderFixRow.idProperty; }
        protected getInsertPermission() { return WorkOrderFixRow.insertPermission; }

        constructor(container: JQuery) {
            super(container);
        }

        
    }
}