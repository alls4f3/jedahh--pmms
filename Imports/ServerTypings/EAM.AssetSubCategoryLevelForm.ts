
namespace PMMS.EAM {
    export class AssetSubCategoryLevelForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetSubCategoryLevel';
    }

    export interface AssetSubCategoryLevelForm {
        ItemName: Serenity.StringEditor;
        ParentId: Serenity.IntegerEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor],
        ['ParentId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(AssetSubCategoryLevelForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}