/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace PMMS.BI {

    @Serenity.Decorators.registerClass()
    export class CustomDashboardsScriptsEditor extends Common.GridEditorBase<CustomDashboardsScriptsRow> {
      

        protected getColumnsKey() { return "BI.CustomDashboardsScripts"; }
        protected getDialogType() { return CustomDashboardsScriptsDialog; }
        protected getLocalTextPrefix() { return CustomDashboardsScriptsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {

            return true;
        }

    }
}