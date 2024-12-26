
namespace PMMS.Distortion {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class DistortionCasesGrid extends Serenity.EntityGrid<DistortionCasesRow, any> {
        protected getColumnsKey() { return 'Distortion.DistortionCases'; }
        protected getDialogType() { return DistortionCasesDialog; }
        protected getIdProperty() { return DistortionCasesRow.idProperty; }
        protected getInsertPermission() { return DistortionCasesRow.insertPermission; }