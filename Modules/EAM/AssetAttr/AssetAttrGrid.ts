
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetAttrGrid extends Serenity.EntityGrid<AssetAttrRow, any> {
        protected getColumnsKey() { return 'EAM.AssetAttr'; }
        protected getDialogType() { return AssetAttrDialog; }
        protected getIdProperty() { return AssetAttrRow.idProperty; }
        protected getInsertPermission() { return AssetAttrRow.insertPermission; }
    }
}