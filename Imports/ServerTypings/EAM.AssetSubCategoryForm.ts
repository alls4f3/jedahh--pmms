
namespace PMMS.EAM {
    export class AssetSubCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetSubCategory';
    }

    export interface AssetSubCategoryForm {
        ItemName: Serenity.StringEditor;
        ParentId: Serenity.IntegerEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor],
        ['ParentId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(AssetSubCategoryForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}