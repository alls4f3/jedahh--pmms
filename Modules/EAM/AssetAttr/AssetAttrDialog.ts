
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetAttrDialog extends Serenity.EntityDialog<AssetAttrRow, any> {
        protected getFormKey() { return AssetAttrForm.formKey; }
        protected getIdProperty() { return AssetAttrRow.idProperty; }
        protected getLocalTextPrefix() { return AssetAttrRow.localTextPrefix; }
        protected getNameProperty() { return AssetAttrRow.nameProperty; }
        protected getService() { return AssetAttrService.baseUrl; }
        protected getDeletePermission() { return AssetAttrRow.insertPermission; }
    }
}