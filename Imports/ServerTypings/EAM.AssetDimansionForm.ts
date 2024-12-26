
namespace PMMS.EAM {
    export class AssetDimansionForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetDimansion';
    }

    export interface AssetDimansionForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetDimansionForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}