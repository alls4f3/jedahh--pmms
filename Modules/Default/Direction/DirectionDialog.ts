
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class DirectionDialog extends Serenity.EntityDialog<DirectionRow, any> {
        protected getFormKey() { return DirectionForm.formKey; }
        protected getIdProperty() { return DirectionRow.idProperty; }
        protected getLocalTextPrefix() { return DirectionRow.localTextPrefix; }
        protected getNameProperty() { return DirectionRow.nameProperty; }
        protected getService() { return DirectionService.baseUrl; }
        protected getDeletePermission() { return DirectionRow.insertPermission; }
    }
}