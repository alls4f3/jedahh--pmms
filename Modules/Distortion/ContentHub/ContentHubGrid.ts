
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    export class ContentHubGrid extends Serenity.EntityGrid<ContentHubRow, any> {
        protected getColumnsKey() { return 'Distortion.ContentHub'; }
        protected getDialogType() { return ContentHubDialog; }
        protected getIdProperty() { return ContentHubRow.idProperty; }
        protected getInsertPermission() { return ContentHubRow.insertPermission; }