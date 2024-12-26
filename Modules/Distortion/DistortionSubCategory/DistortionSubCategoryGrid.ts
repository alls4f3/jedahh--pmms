
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    export class DistortionSubCategoryGrid extends Serenity.EntityGrid<DistortionSubCategoryRow, any> {
        protected getColumnsKey() { return 'Distortion.DistortionSubCategory'; }
        protected getDialogType() { return DistortionSubCategoryDialog; }
        protected getIdProperty() { return DistortionSubCategoryRow.idProperty; }
        protected getInsertPermission() { return DistortionSubCategoryRow.insertPermission; }