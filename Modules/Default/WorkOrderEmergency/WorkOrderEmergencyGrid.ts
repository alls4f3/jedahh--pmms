
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkOrderEmergencyGrid extends Serenity.EntityGrid<WorkOrderEmergencyRow, any> {
        protected getColumnsKey() { return 'Default.WorkOrderEmergency'; }
        protected getDialogType() { return WorkOrderEmergencyDialog; }
        protected getIdProperty() { return WorkOrderEmergencyRow.idProperty; }
        protected getInsertPermission() { return WorkOrderEmergencyRow.insertPermission; }