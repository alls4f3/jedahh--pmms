
namespace PMMS.EAM {
    export class AssetsTotalCalcForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetsTotalCalc';
    }

    export interface AssetsTotalCalcForm {
        ItemName: Serenity.StringEditor;
        ItemOp: Serenity.StringEditor;
        ItemValue: Serenity.DecimalEditor;
        ItemThen: Serenity.IntegerEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor],
        ['ItemOp', () => Serenity.StringEditor],
        ['ItemValue', () => Serenity.DecimalEditor],
        ['ItemThen', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(AssetsTotalCalcForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}