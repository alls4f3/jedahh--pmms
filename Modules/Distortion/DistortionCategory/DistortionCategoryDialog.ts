
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    export class DistortionCategoryDialog extends Serenity.EntityDialog<DistortionCategoryRow, any> {
        protected getFormKey() { return DistortionCategoryForm.formKey; }
        protected getIdProperty() { return DistortionCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return DistortionCategoryRow.localTextPrefix; }
        protected getNameProperty() { return DistortionCategoryRow.nameProperty; }
        protected getService() { return DistortionCategoryService.baseUrl; }
        protected getDeletePermission() { return DistortionCategoryRow.insertPermission; }