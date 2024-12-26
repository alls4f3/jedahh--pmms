
namespace PMMS.Administration {
    export class UserGroupsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.UserGroups';
    }

    export interface UserGroupsForm {
        UserGroupName: Serenity.StringEditor;
    }

    [,
        ['UserGroupName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(UserGroupsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}