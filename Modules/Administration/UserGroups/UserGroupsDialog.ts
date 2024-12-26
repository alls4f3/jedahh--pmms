
namespace PMMS.Administration {

    @Serenity.Decorators.registerClass()
    export class UserGroupsDialog extends Serenity.EntityDialog<UserGroupsRow, any> {
        protected getFormKey() { return UserGroupsForm.formKey; }
        protected getIdProperty() { return UserGroupsRow.idProperty; }
        protected getLocalTextPrefix() { return UserGroupsRow.localTextPrefix; }
        protected getNameProperty() { return UserGroupsRow.nameProperty; }
        protected getService() { return UserGroupsService.baseUrl; }
        protected getDeletePermission() { return UserGroupsRow.insertPermission; }