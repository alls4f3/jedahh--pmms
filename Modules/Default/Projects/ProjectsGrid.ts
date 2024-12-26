
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ProjectsGrid extends Serenity.EntityGrid<ProjectsRow, any> {
        protected getColumnsKey() { return 'Default.Projects'; }
        protected getDialogType() { return ProjectsDialog; }
        protected getIdProperty() { return ProjectsRow.idProperty; }
        protected getInsertPermission() { return ProjectsRow.insertPermission; }
    }
}