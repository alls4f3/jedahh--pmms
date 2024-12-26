
namespace PMMS.Default {
    export class ImportTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ImportType';
    }

    export interface ImportTypeForm {
        TypeName: Serenity.StringEditor;
    }

    [,
        ['TypeName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ImportTypeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}