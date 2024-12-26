
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetTagsDialog extends Serenity.EntityDialog<AssetTagsRow, any> {
        protected getFormKey() { return AssetTagsForm.formKey; }
        protected getIdProperty() { return AssetTagsRow.idProperty; }
        protected getLocalTextPrefix() { return AssetTagsRow.localTextPrefix; }
        protected getNameProperty() { return AssetTagsRow.nameProperty; }
        protected getService() { return AssetTagsService.baseUrl; }
        protected getDeletePermission() { return AssetTagsRow.insertPermission; }