
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    export class DistortionStatusGrid extends Serenity.EntityGrid<DistortionStatusRow, any> {
        protected getColumnsKey() { return 'Distortion.DistortionStatus'; }
        protected getDialogType() { return DistortionStatusDialog; }
        protected getIdProperty() { return DistortionStatusRow.idProperty; }
        protected getInsertPermission() { return DistortionStatusRow.insertPermission; }