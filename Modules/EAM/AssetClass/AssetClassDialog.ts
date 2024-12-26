
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetClassDialog extends Serenity.EntityDialog<AssetClassRow, any> {
        protected getFormKey() { return AssetClassForm.formKey; }
        protected getIdProperty() { return AssetClassRow.idProperty; }
        protected getLocalTextPrefix() { return AssetClassRow.localTextPrefix; }
        protected getNameProperty() { return AssetClassRow.nameProperty; }
        protected getService() { return AssetClassService.baseUrl; }
        protected getDeletePermission() { return AssetClassRow.insertPermission; }
    }
}