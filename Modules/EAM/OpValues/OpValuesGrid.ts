
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class OpValuesGrid extends Serenity.EntityGrid<OpValuesRow, any> {
        protected getColumnsKey() { return 'EAM.OpValues'; }
        protected getDialogType() { return OpValuesDialog; }
        protected getIdProperty() { return OpValuesRow.idProperty; }
        protected getInsertPermission() { return OpValuesRow.insertPermission; }