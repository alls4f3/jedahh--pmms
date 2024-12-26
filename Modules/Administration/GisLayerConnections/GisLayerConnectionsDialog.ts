
namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class GisLayerConnectionsDialog extends Serenity.EntityDialog<GisLayerConnectionsRow, any> {
        protected getFormKey() { return GisLayerConnectionsForm.formKey; }
        protected getIdProperty() { return GisLayerConnectionsRow.idProperty; }
        protected getLocalTextPrefix() { return GisLayerConnectionsRow.localTextPrefix; }
        protected getNameProperty() { return GisLayerConnectionsRow.nameProperty; }
        protected getService() { return GisLayerConnectionsService.baseUrl; }
        protected getDeletePermission() { return GisLayerConnectionsRow.insertPermission; }