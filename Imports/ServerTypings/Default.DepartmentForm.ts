
namespace PMMS.Default {
    export class DepartmentForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Department';
    }

    export interface DepartmentForm {
        DepartmentName: Serenity.StringEditor;
    }

    [,
        ['DepartmentName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(DepartmentForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}