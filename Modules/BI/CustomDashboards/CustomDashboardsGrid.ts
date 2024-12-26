
namespace PMMS.BI {

    @Serenity.Decorators.registerClass()
    export class CustomDashboardsGrid extends Serenity.EntityGrid<CustomDashboardsRow, any> {
        protected getColumnsKey() { return 'BI.CustomDashboards'; }
        protected getDialogType() { return CustomDashboardsDialog; }
        protected getIdProperty() { return CustomDashboardsRow.idProperty; }
        protected getInsertPermission() { return CustomDashboardsRow.insertPermission; }