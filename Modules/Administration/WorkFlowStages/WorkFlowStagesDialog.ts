
namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class WorkFlowStagesDialog extends Serenity.EntityDialog<WorkFlowStagesRow, any> {
        protected getFormKey() { return WorkFlowStagesForm.formKey; }
        protected getIdProperty() { return WorkFlowStagesRow.idProperty; }
        protected getLocalTextPrefix() { return WorkFlowStagesRow.localTextPrefix; }
        protected getNameProperty() { return WorkFlowStagesRow.nameProperty; }
        protected getService() { return WorkFlowStagesService.baseUrl; }
        protected getDeletePermission() { return WorkFlowStagesRow.insertPermission; }
    }
}