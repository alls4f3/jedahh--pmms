
namespace PMMS.EAM {
    export class AssetClassForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetClass';
    }

    export interface AssetClassForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetClassForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}