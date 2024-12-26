
namespace PMMS.Default {
    export class ImportWizerdLocalForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ImportWizerdLocal';
    }

    export interface ImportWizerdLocalForm {
        FileName: Serenity.StringEditor;
        ImportType: Serenity.StringEditor;
        ImportDate: Serenity.DateEditor;
        ImportRef: Serenity.StringEditor;
        ImportBy: Serenity.StringEditor;
        ContentUrl: Serenity.StringEditor;
        ContentUrlFwd: Serenity.StringEditor;
        ContentUrlIri: Serenity.StringEditor;
        ContentUrlSkid: Serenity.StringEditor;
        Status: Serenity.StringEditor;
        StatusMessage: Serenity.StringEditor;
        SurvayDate: Serenity.DateEditor;
        DisplayStreet: Serenity.StringEditor;
        DisplayLane: Serenity.StringEditor;
        DisplayArea: Serenity.StringEditor;
        DisplayCity: Serenity.StringEditor;
        DisplaySection: Serenity.StringEditor;
        DisplayStreetName: Serenity.StringEditor;
    }

    [
        ['FileName', () => Serenity.StringEditor],
        ['ImportType', () => Serenity.StringEditor],
        ['ImportDate', () => Serenity.DateEditor],
        ['ImportRef', () => Serenity.StringEditor],
        ['ImportBy', () => Serenity.StringEditor],
        ['ContentUrl', () => Serenity.StringEditor],
        ['ContentUrlFwd', () => Serenity.StringEditor],
        ['ContentUrlIri', () => Serenity.StringEditor],
        ['ContentUrlSkid', () => Serenity.StringEditor],
        ['Status', () => Serenity.StringEditor],
        ['StatusMessage', () => Serenity.StringEditor],
        ['SurvayDate', () => Serenity.DateEditor],
        ['DisplayStreet', () => Serenity.StringEditor],
        ['DisplayLane', () => Serenity.StringEditor],
        ['DisplayArea', () => Serenity.StringEditor],
        ['DisplayCity', () => Serenity.StringEditor],
        ['DisplaySection', () => Serenity.StringEditor],
        ['DisplayStreetName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ImportWizerdLocalForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}