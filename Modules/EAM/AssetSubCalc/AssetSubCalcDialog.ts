
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetSubCalcDialog extends Serenity.EntityDialog<AssetSubCalcRow, any> {
        protected getFormKey() { return AssetSubCalcForm.formKey; }
        protected getIdProperty() { return AssetSubCalcRow.idProperty; }
        protected getLocalTextPrefix() { return AssetSubCalcRow.localTextPrefix; }
        protected getNameProperty() { return AssetSubCalcRow.nameProperty; }
        protected getService() { return AssetSubCalcService.baseUrl; }
        protected getDeletePermission() { return AssetSubCalcRow.insertPermission; }