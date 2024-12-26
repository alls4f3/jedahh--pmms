
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class ImportWizerdDialog extends Serenity.EntityDialog<ImportWizerdRow, any> {
        protected getFormKey() { return ImportWizerdForm.formKey; }
        protected getIdProperty() { return ImportWizerdRow.idProperty; }
        protected getLocalTextPrefix() { return ImportWizerdRow.localTextPrefix; }
        protected getNameProperty() { return ImportWizerdRow.nameProperty; }
        protected getService() { return ImportWizerdService.baseUrl; }
        protected getDeletePermission() { return ImportWizerdRow.insertPermission; }