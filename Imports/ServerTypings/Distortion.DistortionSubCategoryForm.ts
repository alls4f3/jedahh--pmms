
namespace PMMS.Distortion {
    export class DistortionSubCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Distortion.DistortionSubCategory';
    }

    export interface DistortionSubCategoryForm {
        ItemName: Serenity.StringEditor;
        ParentId: Serenity.IntegerEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor],
        ['ParentId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(DistortionSubCategoryForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}