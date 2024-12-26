
namespace PMMS.EAM {
    export class AssetsMaintCritForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetsMaintCrit';
    }

    export interface AssetsMaintCritForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetsMaintCritForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}