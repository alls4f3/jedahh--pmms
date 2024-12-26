
namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class WorkFlowStagesGrid extends Serenity.EntityGrid<WorkFlowStagesRow, any> {
        protected getColumnsKey() { return 'Administration.WorkFlowStages'; }
        protected getDialogType() { return WorkFlowStagesDialog; }
        protected getIdProperty() { return WorkFlowStagesRow.idProperty; }
        protected getInsertPermission() { return WorkFlowStagesRow.insertPermission; }
    }
}