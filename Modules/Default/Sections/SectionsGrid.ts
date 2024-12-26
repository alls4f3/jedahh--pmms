
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class SectionsGrid extends Serenity.EntityGrid<SectionsRow, any> {
        protected getColumnsKey() { return 'Default.Sections'; }
        protected getDialogType() { return SectionsDialog; }
        protected getIdProperty() { return SectionsRow.idProperty; }
        protected getInsertPermission() { return SectionsRow.insertPermission; }
    }
}