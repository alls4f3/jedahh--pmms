
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class ImportWizerdGrid extends Serenity.EntityGrid<ImportWizerdRow, any> {
        protected getColumnsKey() { return 'Default.ImportWizerd'; }
        protected getDialogType() { return ImportWizerdDialog; }
        protected getIdProperty() { return ImportWizerdRow.idProperty; }
        protected getInsertPermission() { return ImportWizerdRow.insertPermission; }