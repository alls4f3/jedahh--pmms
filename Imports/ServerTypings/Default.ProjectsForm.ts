
namespace PMMS.Default {
    export class ProjectsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Projects';
    }

    export interface ProjectsForm {
        ProjectName: Serenity.StringEditor;
        ProjectLocation: Serenity.StringEditor;
        ContractorName: Serenity.StringEditor;
        Maplocation: Serenity.StringEditor;
        ProjectAttachment: Serenity.StringEditor;
    }

    [,
        ['ProjectName', () => Serenity.StringEditor],
        ['ProjectLocation', () => Serenity.StringEditor],
        ['ContractorName', () => Serenity.StringEditor],
        ['Maplocation', () => Serenity.StringEditor],
        ['ProjectAttachment', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ProjectsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}