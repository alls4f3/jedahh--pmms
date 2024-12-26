
namespace PMMS.EAM {
    export class AssetsMaintCondationForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetsMaintCondation';
    }

    export interface AssetsMaintCondationForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetsMaintCondationForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}