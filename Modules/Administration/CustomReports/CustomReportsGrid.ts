
namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class CustomReportsGrid extends Serenity.EntityGrid<CustomReportsRow, any> {
        protected getColumnsKey() { return 'Administration.CustomReports'; }
        protected getDialogType() { return CustomReportsDialog; }
        protected getIdProperty() { return CustomReportsRow.idProperty; }
        protected getInsertPermission() { return CustomReportsRow.insertPermission; }