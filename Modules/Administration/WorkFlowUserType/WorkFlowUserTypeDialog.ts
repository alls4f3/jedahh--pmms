
namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class WorkFlowUserTypeDialog extends Serenity.EntityDialog<WorkFlowUserTypeRow, any> {
        protected getFormKey() { return WorkFlowUserTypeForm.formKey; }
        protected getIdProperty() { return WorkFlowUserTypeRow.idProperty; }
        protected getLocalTextPrefix() { return WorkFlowUserTypeRow.localTextPrefix; }
        protected getNameProperty() { return WorkFlowUserTypeRow.nameProperty; }
        protected getService() { return WorkFlowUserTypeService.baseUrl; }
        protected getDeletePermission() { return WorkFlowUserTypeRow.insertPermission; }
    }
}