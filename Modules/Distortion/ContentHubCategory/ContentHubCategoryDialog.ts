
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    export class ContentHubCategoryDialog extends Serenity.EntityDialog<ContentHubCategoryRow, any> {
        protected getFormKey() { return ContentHubCategoryForm.formKey; }
        protected getIdProperty() { return ContentHubCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return ContentHubCategoryRow.localTextPrefix; }
        protected getNameProperty() { return ContentHubCategoryRow.nameProperty; }
        protected getService() { return ContentHubCategoryService.baseUrl; }
        protected getDeletePermission() { return ContentHubCategoryRow.insertPermission; }