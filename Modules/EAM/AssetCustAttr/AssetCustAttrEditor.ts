/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetCustAttrEditor extends Common.GridEditorBase<AssetCustAttrRow> {


        protected getColumnsKey() { return "EAM.AssetCustAttr"; }
        protected getDialogType() { return AssetCustAttrDialog; }
        protected getLocalTextPrefix() { return AssetCustAttrRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            row.AttrId = Q.toId(row.AttrId);

            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.AttrId === row.AttrId);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This Attr is already register!');
                return false;
            }

            /* row.AttrName = AssetAttrRow.getLookup().itemById[row.AttrId].ItemName;*/

            return true;

        }
    }
}