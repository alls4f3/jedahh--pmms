
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class OpValuesDialog extends Serenity.EntityDialog<OpValuesRow, any> {
        protected getFormKey() { return OpValuesForm.formKey; }
        protected getIdProperty() { return OpValuesRow.idProperty; }
        protected getLocalTextPrefix() { return OpValuesRow.localTextPrefix; }
        protected getNameProperty() { return OpValuesRow.nameProperty; }
        protected getService() { return OpValuesService.baseUrl; }
        protected getDeletePermission() { return OpValuesRow.insertPermission; }