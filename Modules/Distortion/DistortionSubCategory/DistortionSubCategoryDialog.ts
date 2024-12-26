
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    export class DistortionSubCategoryDialog extends Serenity.EntityDialog<DistortionSubCategoryRow, any> {
        protected getFormKey() { return DistortionSubCategoryForm.formKey; }
        protected getIdProperty() { return DistortionSubCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return DistortionSubCategoryRow.localTextPrefix; }
        protected getNameProperty() { return DistortionSubCategoryRow.nameProperty; }
        protected getService() { return DistortionSubCategoryService.baseUrl; }
        protected getDeletePermission() { return DistortionSubCategoryRow.insertPermission; }