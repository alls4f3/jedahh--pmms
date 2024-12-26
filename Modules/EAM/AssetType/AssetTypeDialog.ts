
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetTypeDialog extends Serenity.EntityDialog<AssetTypeRow, any> {
        protected getFormKey() { return AssetTypeForm.formKey; }
        protected getIdProperty() { return AssetTypeRow.idProperty; }
        protected getLocalTextPrefix() { return AssetTypeRow.localTextPrefix; }
        protected getNameProperty() { return AssetTypeRow.nameProperty; }
        protected getService() { return AssetTypeService.baseUrl; }
        protected getDeletePermission() { return AssetTypeRow.insertPermission; }