
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class ImportWizerdByEqFilesGrid extends Serenity.EntityGrid<ImportWizerdByEqFilesRow, any> {
        protected getColumnsKey() { return 'Default.ImportWizerdByEqFiles'; }
        protected getDialogType() { return ImportWizerdByEqFilesDialog; }
        protected getIdProperty() { return ImportWizerdByEqFilesRow.idProperty; }
        protected getInsertPermission() { return ImportWizerdByEqFilesRow.insertPermission; }