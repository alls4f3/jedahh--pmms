namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey() { return "Administration.User"; }
        protected getDialogType() { return UserDialog; }
        protected getIdProperty() { return UserRow.idProperty; }
        protected getIsActiveProperty() { return UserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
        protected getService() { return UserService.baseUrl; }

        constructor(container: JQuery) {
                
            super(container);
            this.view.setGrouping(
                [{
                    getter: 'UserTypeName'
                }]);

        }

        protected getDefaultSortBy() {
            return [UserRow.Fields.Username];
        }

        protected getButtons() {

            var buttons = super.getButtons();


            buttons.push(
                {
                title: 'Group By User Type',
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [{
                        getter: 'UserTypeName'
                    }])
                }
                   , {
                title: 'No Grouping',
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
            }

            )

             

            return buttons;

        }
    
    }
}