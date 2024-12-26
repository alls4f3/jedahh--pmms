/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetsSurveyDistressEditor extends Common.GridEditorBase<AssetsSurveyDistressRow> {


        protected getColumnsKey() { return "EAM.AssetsSurveyDistress"; }
        protected getDialogType() { return AssetsSurveyDistressDialog; }
        protected getLocalTextPrefix() { return AssetsSurveyDistressRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
           // row.AttrId = Q.toId(row.AttrId);

           // var sameProduct = Q.tryFirst(this.view.getItems(), x => x.AttrId === row.AttrId);
           // if (sameProduct && this.id(sameProduct) !== id) {
           //     Q.alert('This Attr is already register!');
           //     return false;
           // }

           ///* row.AttrName = AssetAttrRow.getLookup().itemById[row.AttrId].ItemName;*/

            return true;

    }
}