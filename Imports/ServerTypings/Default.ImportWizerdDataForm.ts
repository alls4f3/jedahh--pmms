
namespace PMMS.Default {
    export class ImportWizerdDataForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ImportWizerdData';
    }

    export interface ImportWizerdDataForm {
        FileName: Serenity.StringEditor;
        ImportType: Serenity.StringEditor;
        ImportDate: Serenity.DateEditor;
        ImportRef: Serenity.StringEditor;
        ImportBy: Serenity.StringEditor;
        ContentUrl: Serenity.StringEditor;
        StatusMessage: Serenity.StringEditor;
    }

    [
        ['FileName', () => Serenity.StringEditor],
        ['ImportType', () => Serenity.StringEditor],
        ['ImportDate', () => Serenity.DateEditor],
        ['ImportRef', () => Serenity.StringEditor],
        ['ImportBy', () => Serenity.StringEditor],
        ['ContentUrl', () => Serenity.StringEditor],
        ['StatusMessage', () => Serenity.StringEditor]

    ].forEach(x => Object.defineProperty(ImportWizerdDataForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}