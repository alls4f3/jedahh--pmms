
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkOrderBugEditor extends Common.GridEditorBase<WorkOrderBugRow> {
      

        protected getColumnsKey() { return "Default.WorkOrderBug"; }
        protected getDialogType() { return WorkOrderBugDialog; }
        protected getLocalTextPrefix() { return WorkOrderBugRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {

            return true;
        }

    }
}