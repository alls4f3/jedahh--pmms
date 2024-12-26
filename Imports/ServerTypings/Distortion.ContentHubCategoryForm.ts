
namespace PMMS.Distortion {
    export class ContentHubCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Distortion.ContentHubCategory';
    }

    export interface ContentHubCategoryForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ContentHubCategoryForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}