
namespace PMMS.Administration {
    export class CustomReportsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.CustomReports';
    }

    export interface CustomReportsForm {
        ReportName: Serenity.StringEditor;
        ReportPath: Serenity.StringEditor;
    }

    [,
        ['ReportName', () => Serenity.StringEditor],
        ['ReportPath', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(CustomReportsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}