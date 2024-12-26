
namespace PMMS.Default {
    export class ImportWizerdByEqFilesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ImportWizerdByEqFiles';
    }

    export interface ImportWizerdByEqFilesForm {
        FileName: Serenity.StringEditor;
        ImportType: Serenity.StringEditor;
        ImportDate: Serenity.DateEditor;
        ImportRef: Serenity.StringEditor;
        ImportBy: Serenity.StringEditor;
        Status: Serenity.StringEditor;
        StatusMessage: Serenity.StringEditor;
        SurvayDate: Serenity.DateEditor;
        GroupSurvey: Serenity.IntegerEditor;
        ImportUrl: Serenity.StringEditor;
    }

    [
        ['FileName', () => Serenity.StringEditor],
        ['ImportType', () => Serenity.StringEditor],
        ['ImportDate', () => Serenity.DateEditor],
        ['ImportRef', () => Serenity.StringEditor],
        ['ImportBy', () => Serenity.StringEditor],
        ['Status', () => Serenity.StringEditor],
        ['StatusMessage', () => Serenity.StringEditor],
        ['SurvayDate', () => Serenity.DateEditor],
        ['GroupSurvey', () => Serenity.IntegerEditor],
        ['ImportUrl', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ImportWizerdByEqFilesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}