
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class FeaturesGrid extends Serenity.EntityGrid<FeaturesRow, any> {
        protected getColumnsKey() { return 'Default.Features'; }
        protected getDialogType() { return FeaturesDialog; }
        protected getIdProperty() { return FeaturesRow.idProperty; }
        protected getInsertPermission() { return FeaturesRow.insertPermission; }
    }
}