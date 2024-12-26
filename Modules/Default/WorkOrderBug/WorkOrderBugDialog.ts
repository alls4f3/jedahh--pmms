
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkOrderBugDialog extends Common.GridEditorDialog<WorkOrderBugRow> {
        protected getFormKey() { return WorkOrderBugForm.formKey; }
       /* protected getIdProperty() { return WorkOrderBugRow.idProperty; }*/
        protected getLocalTextPrefix() { return WorkOrderBugRow.localTextPrefix; }
        protected getNameProperty() { return WorkOrderBugRow.nameProperty; }
        protected getService() { return WorkOrderBugService.baseUrl; }
        protected getDeletePermission() { return WorkOrderBugRow.insertPermission; }



        protected form: WorkOrderBugForm;

        constructor() {
            super();

            this.form = new WorkOrderBugForm(this.idPrefix);




        }
    }
}