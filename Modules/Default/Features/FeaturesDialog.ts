
namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class FeaturesDialog extends Serenity.EntityDialog<FeaturesRow, any> {
        protected getFormKey() { return FeaturesForm.formKey; }
        protected getIdProperty() { return FeaturesRow.idProperty; }
        protected getLocalTextPrefix() { return FeaturesRow.localTextPrefix; }
        protected getNameProperty() { return FeaturesRow.nameProperty; }
        protected getService() { return FeaturesService.baseUrl; }
        protected getDeletePermission() { return FeaturesRow.insertPermission; }
    }
}