
namespace PMMS.EAM {
    export class AssetCustAttrForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetCustAttr';
    }

    export interface AssetCustAttrForm {
        AssetId: Serenity.IntegerEditor;
        AttrId: Serenity.IntegerEditor;
        AttrValue: Serenity.StringEditor;
    }

    [,
        ['AssetId', () => Serenity.IntegerEditor],
        ['AttrId', () => Serenity.IntegerEditor],
        ['AttrValue', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetCustAttrForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}