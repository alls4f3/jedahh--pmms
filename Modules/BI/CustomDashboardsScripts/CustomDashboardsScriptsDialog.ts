/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace PMMS.BI {

    @Serenity.Decorators.registerClass()
    export class CustomDashboardsScriptsDialog extends Common.GridEditorDialog<CustomDashboardsScriptsRow> {
   
        protected getFormKey() { return CustomDashboardsScriptsForm.formKey; }
        //protected getIdProperty() { return CustomDashboardsScriptsRow.idProperty; }
        protected getLocalTextPrefix() { return CustomDashboardsScriptsRow.localTextPrefix; }
        protected getNameProperty() { return CustomDashboardsScriptsRow.nameProperty; }
        protected getService() { return CustomDashboardsScriptsService.baseUrl; }
        protected getDeletePermission() { return CustomDashboardsScriptsRow.insertPermission; }


        protected form:CustomDashboardsScriptsForm;

        constructor() {
            super();

            this.form = new CustomDashboardsScriptsForm(this.idPrefix);




        }

    }
}