
namespace PMMS.EAM {
    export class AssetTagsForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetTags';
    }

    export interface AssetTagsForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetTagsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}