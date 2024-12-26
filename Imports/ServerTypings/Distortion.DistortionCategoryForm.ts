
namespace PMMS.Distortion {
    export class DistortionCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Distortion.DistortionCategory';
    }

    export interface DistortionCategoryForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(DistortionCategoryForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}