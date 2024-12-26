
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class ContractorsDialog extends Serenity.EntityDialog<ContractorsRow, any> {
        protected getFormKey() { return ContractorsForm.formKey; }
        protected getIdProperty() { return ContractorsRow.idProperty; }
        protected getLocalTextPrefix() { return ContractorsRow.localTextPrefix; }
        protected getNameProperty() { return ContractorsRow.nameProperty; }
        protected getService() { return ContractorsService.baseUrl; }
        protected getDeletePermission() { return ContractorsRow.insertPermission; }
    }
}