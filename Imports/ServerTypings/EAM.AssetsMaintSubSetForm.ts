
namespace PMMS.EAM {
    export class AssetsMaintSubSetForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetsMaintSubSet';
    }

    export interface AssetsMaintSubSetForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetsMaintSubSetForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}