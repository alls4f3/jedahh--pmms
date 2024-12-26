
namespace PMMS.EAM {
    export class AssetDistressForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetDistress';
    }

    export interface AssetDistressForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetDistressForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}