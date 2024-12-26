
namespace PMMS.BI {
    export class CustomDashboardsScriptsForm extends Serenity.PrefixedContext {
        static formKey = 'BI.CustomDashboardsScripts';
    }

    export interface CustomDashboardsScriptsForm {
        PageId: Serenity.IntegerEditor;
        ScriptName: Serenity.StringEditor;
        ScriptApi: Serenity.StringEditor;
    }

    [,
        ['PageId', () => Serenity.IntegerEditor],
        ['ScriptName', () => Serenity.StringEditor],
        ['ScriptApi', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(CustomDashboardsScriptsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}