
namespace PMMS.EAM {
    export class AssetsSeverityForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetsSeverity';
    }

    export interface AssetsSeverityForm {
        SName: Serenity.StringEditor;
    }

    [,
        ['SName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetsSeverityForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}