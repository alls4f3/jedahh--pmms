
namespace PMMS.EAM {
    export class AssetSubCalcForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetSubCalc';
    }

    export interface AssetSubCalcForm {
        Sid: Serenity.StringEditor;
        DisId: Serenity.IntegerEditor;
        Density: Serenity.StringEditor;
        TotalValue: Serenity.StringEditor;
    }

    [,
        ['Sid', () => Serenity.StringEditor],
        ['DisId', () => Serenity.IntegerEditor],
        ['Density', () => Serenity.StringEditor],
        ['TotalValue', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetSubCalcForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}