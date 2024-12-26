
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class ProjectsDialog extends Serenity.EntityDialog<ProjectsRow, any> {
        protected getFormKey() { return ProjectsForm.formKey; }
        protected getIdProperty() { return ProjectsRow.idProperty; }
        protected getLocalTextPrefix() { return ProjectsRow.localTextPrefix; }
        protected getNameProperty() { return ProjectsRow.nameProperty; }
        protected getService() { return ProjectsService.baseUrl; }
        protected getDeletePermission() { return ProjectsRow.insertPermission; }