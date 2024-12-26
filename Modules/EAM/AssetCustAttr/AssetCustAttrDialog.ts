
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetCustAttrDialog extends Common.GridEditorDialog<AssetCustAttrRow, any> {
        protected getFormKey() { return AssetCustAttrForm.formKey; }
        protected getIdProperty() { return AssetCustAttrRow.idProperty; }
        protected getLocalTextPrefix() { return AssetCustAttrRow.localTextPrefix; }
        protected getNameProperty() { return AssetCustAttrRow.nameProperty; }
        protected getService() { return AssetCustAttrService.baseUrl; }
        protected getDeletePermission() { return AssetCustAttrRow.insertPermission; }


        protected form:  AssetCustAttrForm;

        constructor() {
            super();

            this.form = new AssetCustAttrForm(this.idPrefix);




        }


    }