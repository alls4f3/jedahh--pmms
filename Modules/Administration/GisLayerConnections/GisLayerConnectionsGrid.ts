
namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class GisLayerConnectionsGrid extends Serenity.EntityGrid<GisLayerConnectionsRow, any> {
        protected getColumnsKey() { return 'Administration.GisLayerConnections'; }
        protected getDialogType() { return GisLayerConnectionsDialog; }
        protected getIdProperty() { return GisLayerConnectionsRow.idProperty; }
        protected getInsertPermission() { return GisLayerConnectionsRow.insertPermission; }