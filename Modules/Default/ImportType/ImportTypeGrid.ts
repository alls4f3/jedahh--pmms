
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class ImportTypeGrid extends Serenity.EntityGrid<ImportTypeRow, any> {
        protected getColumnsKey() { return 'Default.ImportType'; }
        protected getDialogType() { return ImportTypeDialog; }
        protected getIdProperty() { return ImportTypeRow.idProperty; }
        protected getInsertPermission() { return ImportTypeRow.insertPermission; }