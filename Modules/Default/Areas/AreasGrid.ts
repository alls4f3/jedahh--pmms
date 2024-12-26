
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class AreasGrid extends Serenity.EntityGrid<AreasRow, any> {
        protected getColumnsKey() { return 'Default.Areas'; }
        protected getDialogType() { return AreasDialog; }
        protected getIdProperty() { return AreasRow.idProperty; }
        protected getInsertPermission() { return AreasRow.insertPermission; }
    }
}