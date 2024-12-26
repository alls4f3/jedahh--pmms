
namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class WorkFlowUserTypeGrid extends Serenity.EntityGrid<WorkFlowUserTypeRow, any> {
        protected getColumnsKey() { return 'Administration.WorkFlowUserType'; }
        protected getDialogType() { return WorkFlowUserTypeDialog; }
        protected getIdProperty() { return WorkFlowUserTypeRow.idProperty; }
        protected getInsertPermission() { return WorkFlowUserTypeRow.insertPermission; }
    }
}