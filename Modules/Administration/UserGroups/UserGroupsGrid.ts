
namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class UserGroupsGrid extends Serenity.EntityGrid<UserGroupsRow, any> {
        protected getColumnsKey() { return 'Administration.UserGroups'; }
        protected getDialogType() { return UserGroupsDialog; }
        protected getIdProperty() { return UserGroupsRow.idProperty; }
        protected getInsertPermission() { return UserGroupsRow.insertPermission; }