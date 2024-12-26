
namespace PMMS.EAM {
    export class AssetsSurveyDistressForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetsSurveyDistress';
    }

    export interface AssetsSurveyDistressForm {
        DistressId: Serenity.IntegerEditor;
        Severity: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        Density: Serenity.StringEditor;
        TotalValue: Serenity.DecimalEditor;
        Itemsuidref: Serenity.IntegerEditor;
    }

    [,
        ['DistressId', () => Serenity.IntegerEditor],
        ['Severity', () => Serenity.StringEditor],
        ['Quantity', () => Serenity.DecimalEditor],
        ['Density', () => Serenity.StringEditor],
        ['TotalValue', () => Serenity.DecimalEditor],
        ['Itemsuidref', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(AssetsSurveyDistressForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}