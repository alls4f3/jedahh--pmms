/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace PMMS.Default {

    @Serenity.Decorators.registerClass()
    export class WorkOrderFixEditor extends Common.GridEditorBase<WorkOrderFixRow> {


        protected getColumnsKey() { return "Default.WorkOrderFix"; }
        protected getDialogType() { return WorkOrderFixDialog; }
        protected getLocalTextPrefix() { return WorkOrderFixRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {

            return true;
        }

        //protected getButtons() {
        //    var buttons = super.getButtons();

        //    buttons.push({
        //        title: "Pick Products",
        //        cssClass: "add-button",
        //        onClick: function () {
        //            new PMMS.Default.WorkOrderDialog({

        //            }).dialogOpen();

        //        }
        //    });

        //    return buttons;
        //}
    }
}