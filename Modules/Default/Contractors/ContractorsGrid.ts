
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ContractorsGrid extends Serenity.EntityGrid<ContractorsRow, any> {
        protected getColumnsKey() { return 'Default.Contractors'; }
        protected getDialogType() { return ContractorsDialog; }
        protected getIdProperty() { return ContractorsRow.idProperty; }
        protected getInsertPermission() { return ContractorsRow.insertPermission; }
    }
}