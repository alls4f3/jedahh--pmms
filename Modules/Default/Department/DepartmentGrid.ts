
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class DepartmentGrid extends Serenity.EntityGrid<DepartmentRow, any> {
        protected getColumnsKey() { return 'Default.Department'; }
        protected getDialogType() { return DepartmentDialog; }
        protected getIdProperty() { return DepartmentRow.idProperty; }
        protected getInsertPermission() { return DepartmentRow.insertPermission; }