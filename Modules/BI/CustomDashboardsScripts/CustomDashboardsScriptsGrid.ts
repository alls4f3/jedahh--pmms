
namespace PMMS.BI {

    @Serenity.Decorators.registerClass()
    export class CustomDashboardsScriptsGrid extends Serenity.EntityGrid<CustomDashboardsScriptsRow, any> {
        protected getColumnsKey() { return 'BI.CustomDashboardsScripts'; }
        protected getDialogType() { return CustomDashboardsScriptsDialog; }
        protected getIdProperty() { return CustomDashboardsScriptsRow.idProperty; }
        protected getInsertPermission() { return CustomDashboardsScriptsRow.insertPermission; }