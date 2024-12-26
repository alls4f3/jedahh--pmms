
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsSurveyDistressGrid extends Serenity.EntityGrid<AssetsSurveyDistressRow, any> {
        protected getColumnsKey() { return 'EAM.AssetsSurveyDistress'; }
        protected getDialogType() { return AssetsSurveyDistressDialog; }
        protected getIdProperty() { return AssetsSurveyDistressRow.idProperty; }
        protected getInsertPermission() { return AssetsSurveyDistressRow.insertPermission; }
    }
}