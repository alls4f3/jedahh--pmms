
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    export class DistortionCategoryGrid extends Serenity.EntityGrid<DistortionCategoryRow, any> {
        protected getColumnsKey() { return 'Distortion.DistortionCategory'; }
        protected getDialogType() { return DistortionCategoryDialog; }
        protected getIdProperty() { return DistortionCategoryRow.idProperty; }
        protected getInsertPermission() { return DistortionCategoryRow.insertPermission; }