
namespace PMMS.EAM {
    export class AssetAttrForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetAttr';
    }

    export interface AssetAttrForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetAttrForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}