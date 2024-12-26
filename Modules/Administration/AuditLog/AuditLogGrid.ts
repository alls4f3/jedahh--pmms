 

namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class AuditLogGrid extends Serenity.EntityGrid<AuditLogRow, any> {
        protected getColumnsKey() { return 'Administration.AuditLog'; }
        protected getDialogType() { return AuditLogDialog; }
        protected getIdProperty() { return AuditLogRow.idProperty; }
        protected getInsertPermission() { return AuditLogRow.insertPermission; }


      

        constructor(container: JQuery) {
            super(container);
        }

        /**
         * Removing add button from grid using its css class
         */
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            return buttons;
        }
    }
}