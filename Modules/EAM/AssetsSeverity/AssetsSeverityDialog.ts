
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsSeverityDialog extends Serenity.EntityDialog<AssetsSeverityRow, any> {
        protected getFormKey() { return AssetsSeverityForm.formKey; }
        protected getIdProperty() { return AssetsSeverityRow.idProperty; }
        protected getLocalTextPrefix() { return AssetsSeverityRow.localTextPrefix; }
        protected getNameProperty() { return AssetsSeverityRow.nameProperty; }
        protected getService() { return AssetsSeverityService.baseUrl; }
        protected getDeletePermission() { return AssetsSeverityRow.insertPermission; }