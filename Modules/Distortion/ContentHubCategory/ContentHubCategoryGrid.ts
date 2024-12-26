
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    export class ContentHubCategoryGrid extends Serenity.EntityGrid<ContentHubCategoryRow, any> {
        protected getColumnsKey() { return 'Distortion.ContentHubCategory'; }
        protected getDialogType() { return ContentHubCategoryDialog; }
        protected getIdProperty() { return ContentHubCategoryRow.idProperty; }
        protected getInsertPermission() { return ContentHubCategoryRow.insertPermission; }