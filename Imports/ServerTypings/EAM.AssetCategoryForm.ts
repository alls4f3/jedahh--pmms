
namespace PMMS.EAM {
    export class AssetCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetCategory';
    }

    export interface AssetCategoryForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetCategoryForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}