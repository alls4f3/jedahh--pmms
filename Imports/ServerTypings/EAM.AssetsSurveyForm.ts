
namespace PMMS.EAM {
    export class AssetsSurveyForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetsSurvey';
    }

    export interface AssetsSurveyForm {
        AssetsId: Serenity.IntegerEditor;
        SurvayDate: Serenity.DateEditor;
        SurvayDec: Serenity.StringEditor;
        SurvayBy: Serenity.StringEditor;
        SurvayResult: Serenity.StringEditor;
        SurvayRank: Serenity.IntegerEditor;
        SurvayNumber: Serenity.IntegerEditor;
    }

    [,
        ['AssetsId', () => Serenity.IntegerEditor],
        ['SurvayDate', () => Serenity.DateEditor],
        ['SurvayDec', () => Serenity.StringEditor],
        ['SurvayBy', () => Serenity.StringEditor],
        ['SurvayResult', () => Serenity.StringEditor],
        ['SurvayRank', () => Serenity.IntegerEditor],
        ['SurvayNumber', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(AssetsSurveyForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}