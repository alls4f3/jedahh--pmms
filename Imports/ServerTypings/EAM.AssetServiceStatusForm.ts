
namespace PMMS.EAM {
    export class AssetServiceStatusForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetServiceStatus';
    }

    export interface AssetServiceStatusForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetServiceStatusForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}