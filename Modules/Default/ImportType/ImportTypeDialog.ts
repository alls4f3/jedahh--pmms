
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class ImportTypeDialog extends Serenity.EntityDialog<ImportTypeRow, any> {
        protected getFormKey() { return ImportTypeForm.formKey; }
        protected getIdProperty() { return ImportTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ImportTypeRow.localTextPrefix; }
        protected getNameProperty() { return ImportTypeRow.nameProperty; }
        protected getService() { return ImportTypeService.baseUrl; }
        protected getDeletePermission() { return ImportTypeRow.insertPermission; }