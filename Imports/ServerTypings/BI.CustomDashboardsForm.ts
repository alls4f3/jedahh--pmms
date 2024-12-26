
namespace PMMS.BI {
    export class CustomDashboardsForm extends Serenity.PrefixedContext {
        static formKey = 'BI.CustomDashboards';
    }

    export interface CustomDashboardsForm {
        PageName: Serenity.StringEditor;
        PagePath: Serenity.StringEditor;
        PageUsers: Serenity.StringEditor;
        PageGroups: Serenity.StringEditor;
    }

    [,
        ['PageName', () => Serenity.StringEditor],
        ['PagePath', () => Serenity.StringEditor],
        ['PageUsers', () => Serenity.StringEditor],
        ['PageGroups', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(CustomDashboardsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}