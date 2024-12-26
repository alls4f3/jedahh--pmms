
namespace PMMS.EAM {
    export class AssetStatusForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetStatus';
    }

    export interface AssetStatusForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetStatusForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}