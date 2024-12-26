
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsTotalCalcDialog extends Serenity.EntityDialog<AssetsTotalCalcRow, any> {
        protected getFormKey() { return AssetsTotalCalcForm.formKey; }
        protected getIdProperty() { return AssetsTotalCalcRow.idProperty; }
        protected getLocalTextPrefix() { return AssetsTotalCalcRow.localTextPrefix; }
        protected getNameProperty() { return AssetsTotalCalcRow.nameProperty; }
        protected getService() { return AssetsTotalCalcService.baseUrl; }
        protected getDeletePermission() { return AssetsTotalCalcRow.insertPermission; }