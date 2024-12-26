
namespace PMMS.Default {
    export class DirectionForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Direction';
    }

    export interface DirectionForm {
        DirectionNo: Serenity.StringEditor;
        DirectionShortName: Serenity.StringEditor;
        DirectionDescription: Serenity.StringEditor;
    }

    [
        ['DirectionNo', () => Serenity.StringEditor],
        ['DirectionShortName', () => Serenity.StringEditor],
        ['DirectionDescription', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(DirectionForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}