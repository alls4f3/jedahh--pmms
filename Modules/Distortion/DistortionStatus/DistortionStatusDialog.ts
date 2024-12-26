
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    export class DistortionStatusDialog extends Serenity.EntityDialog<DistortionStatusRow, any> {
        protected getFormKey() { return DistortionStatusForm.formKey; }
        protected getIdProperty() { return DistortionStatusRow.idProperty; }
        protected getLocalTextPrefix() { return DistortionStatusRow.localTextPrefix; }
        protected getNameProperty() { return DistortionStatusRow.nameProperty; }
        protected getService() { return DistortionStatusService.baseUrl; }
        protected getDeletePermission() { return DistortionStatusRow.insertPermission; }