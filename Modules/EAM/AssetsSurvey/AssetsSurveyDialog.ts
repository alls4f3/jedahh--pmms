
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()

    export class AssetsSurveyDialog extends Serenity.EntityDialog<AssetsSurveyRow, any> {
        protected getFormKey() { return AssetsSurveyForm.formKey; }
        protected getIdProperty() { return AssetsSurveyRow.idProperty; }
        protected getLocalTextPrefix() { return AssetsSurveyRow.localTextPrefix; }
        protected getNameProperty() { return AssetsSurveyRow.nameProperty; }
        protected getService() { return AssetsSurveyService.baseUrl; }
        protected getDeletePermission() { return AssetsSurveyRow.insertPermission; }