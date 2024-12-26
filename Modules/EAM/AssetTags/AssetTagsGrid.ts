
namespace PMMS.EAM {

    @Serenity.Decorators.registerClass()
    export class AssetTagsGrid extends Serenity.EntityGrid<AssetTagsRow, any> {
        protected getColumnsKey() { return 'EAM.AssetTags'; }
        protected getDialogType() { return AssetTagsDialog; }
        protected getIdProperty() { return AssetTagsRow.idProperty; }
        protected getInsertPermission() { return AssetTagsRow.insertPermission; }