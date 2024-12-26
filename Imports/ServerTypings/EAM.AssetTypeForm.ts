
namespace PMMS.EAM {
    export class AssetTypeForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetType';
    }

    export interface AssetTypeForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetTypeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}