
namespace PMMS.EAM {
    export class AssetLocationForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetLocation';
    }

    export interface AssetLocationForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetLocationForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}