
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CityGrid extends Serenity.EntityGrid<CityRow, any> {
        protected getColumnsKey() { return 'Default.City'; }
        protected getDialogType() { return CityDialog; }
        protected getIdProperty() { return CityRow.idProperty; }
        protected getInsertPermission() { return CityRow.insertPermission; }
    }
}