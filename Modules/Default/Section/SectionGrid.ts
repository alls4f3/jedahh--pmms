
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class SectionGrid extends Serenity.EntityGrid<SectionRow, any> {
        protected getColumnsKey() { return 'Default.Section'; }
        protected getDialogType() { return SectionDialog; }
        protected getIdProperty() { return SectionRow.idProperty; }
        protected getInsertPermission() { return SectionRow.insertPermission; }
    }
}