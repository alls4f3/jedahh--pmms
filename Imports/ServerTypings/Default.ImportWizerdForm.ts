
namespace PMMS.Default {
    export class ImportWizerdForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ImportWizerd';
    }

    export interface ImportWizerdForm {
        FileName: Serenity.StringEditor;
        ImportType: Serenity.StringEditor;
        ImportDate: Serenity.StringEditor;
        ImportRef: Serenity.StringEditor;
        ImportBy: Serenity.StringEditor;
        ContentUrl: Serenity.StringEditor;
    }

    [
        ['FileName', () => Serenity.StringEditor],
        ['ImportType', () => Serenity.StringEditor],
        ['ImportDate', () => Serenity.StringEditor],
        ['ImportRef', () => Serenity.StringEditor],
        ['ImportBy', () => Serenity.StringEditor],
        ['ContentUrl', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ImportWizerdForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}