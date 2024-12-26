
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class DepartmentDialog extends Serenity.EntityDialog<DepartmentRow, any> {
        protected getFormKey() { return DepartmentForm.formKey; }
        protected getIdProperty() { return DepartmentRow.idProperty; }
        protected getLocalTextPrefix() { return DepartmentRow.localTextPrefix; }
        protected getNameProperty() { return DepartmentRow.nameProperty; }
        protected getService() { return DepartmentService.baseUrl; }
        protected getDeletePermission() { return DepartmentRow.insertPermission; }