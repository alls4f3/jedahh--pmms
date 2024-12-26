
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkOrderFixDialog extends Common.GridEditorDialog<WorkOrderFixRow> {
        protected getFormKey() { return WorkOrderFixForm.formKey; }
      /*  protected getIdProperty() { return WorkOrderFixRow.idProperty; }*/
        protected getLocalTextPrefix() { return WorkOrderFixRow.localTextPrefix; }
        protected getNameProperty() { return WorkOrderFixRow.nameProperty; }
        protected getService() { return WorkOrderFixService.baseUrl; }
        protected getDeletePermission() { return WorkOrderFixRow.insertPermission; }


        protected form: WorkOrderFixForm;

        constructor() {
            super();

            this.form = new WorkOrderFixForm(this.idPrefix);




        }
       
    }
}