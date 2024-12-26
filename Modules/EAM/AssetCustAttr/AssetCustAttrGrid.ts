
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetCustAttrGrid extends Serenity.EntityGrid<AssetCustAttrRow, any> {
        protected getColumnsKey() { return 'EAM.AssetCustAttr'; }
        protected getDialogType() { return AssetCustAttrDialog; }
        protected getIdProperty() { return AssetCustAttrRow.idProperty; }
        protected getInsertPermission() { return AssetCustAttrRow.insertPermission; }
    }
}