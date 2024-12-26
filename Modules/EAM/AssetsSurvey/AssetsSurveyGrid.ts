
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsSurveyGrid extends Serenity.EntityGrid<AssetsSurveyRow, any> {
        protected getColumnsKey() { return 'EAM.AssetsSurvey'; }
        protected getDialogType() { return AssetsSurveyDialog; }
        protected getIdProperty() { return AssetsSurveyRow.idProperty; }
        protected getInsertPermission() { return AssetsSurveyRow.insertPermission; }
    }
}