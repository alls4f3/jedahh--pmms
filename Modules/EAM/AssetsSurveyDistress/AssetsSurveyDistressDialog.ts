
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsSurveyDistressDialog extends Common.GridEditorDialog<AssetsSurveyDistressRow, any> {
        protected getFormKey() { return AssetsSurveyDistressForm.formKey; }
        //protected getIdProperty() { return AssetsSurveyDistressRow.idProperty; }
        protected getLocalTextPrefix() { return AssetsSurveyDistressRow.localTextPrefix; }
        protected getNameProperty() { return AssetsSurveyDistressRow.nameProperty; }
        protected getService() { return AssetsSurveyDistressService.baseUrl; }
        protected getDeletePermission() { return AssetsSurveyDistressRow.insertPermission; }


        protected form: AssetsSurveyDistressForm;

        constructor() {
            super();

            this.form = new AssetsSurveyDistressForm(this.idPrefix);




        }

    }
}