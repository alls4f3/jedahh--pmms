
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class ImportWizerdByEqFilesDialog extends Serenity.EntityDialog<ImportWizerdByEqFilesRow, any> {
        protected getFormKey() { return ImportWizerdByEqFilesForm.formKey; }
        protected getIdProperty() { return ImportWizerdByEqFilesRow.idProperty; }
        protected getLocalTextPrefix() { return ImportWizerdByEqFilesRow.localTextPrefix; }
        protected getNameProperty() { return ImportWizerdByEqFilesRow.nameProperty; }
        protected getService() { return ImportWizerdByEqFilesService.baseUrl; }
        protected getDeletePermission() { return ImportWizerdByEqFilesRow.insertPermission; }