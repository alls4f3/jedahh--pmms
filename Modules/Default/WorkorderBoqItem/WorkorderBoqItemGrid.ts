
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkorderBoqItemGrid extends Serenity.EntityGrid<WorkorderBoqItemRow, any> {
        protected getColumnsKey() { return 'Default.WorkorderBoqItem'; }
        protected getDialogType() { return WorkorderBoqItemDialog; }
        protected getIdProperty() { return WorkorderBoqItemRow.idProperty; }
        protected getInsertPermission() { return WorkorderBoqItemRow.insertPermission; }


        
    }
}