
namespace PMMS.Distortion {
    export class DistortionCasesForm extends Serenity.PrefixedContext {
        static formKey = 'Distortion.DistortionCases';
    }

    export interface DistortionCasesForm {
        ItemName: Serenity.StringEditor;
        ItemCategory: Serenity.IntegerEditor;
        ItemSubCategory: Serenity.IntegerEditor;
        AssetCity: Serenity.StringEditor;
        AssetZone: Serenity.StringEditor;
        AssetsAreaId: Serenity.StringEditor;
        AssetRoad: Serenity.StringEditor;
        AssetSection: Serenity.StringEditor;
        ItemQty: Serenity.DecimalEditor;
        ItemImages: Serenity.StringEditor;
        ItemDoc: Serenity.StringEditor;
        ItemLatLong: Serenity.StringEditor;
        Attachments: Serenity.StringEditor;
        CaseDate: Serenity.DateEditor;
        CaseAdress: Serenity.StringEditor;
        CaseAmount: Serenity.DecimalEditor;
        CaseDesc: Serenity.StringEditor;
        CaseSolution: Serenity.StringEditor;
        CaseStatus: Serenity.IntegerEditor;
        ItemImagesAfter: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor],
        ['ItemCategory', () => Serenity.IntegerEditor],
        ['ItemSubCategory', () => Serenity.IntegerEditor],
        ['AssetCity', () => Serenity.StringEditor],
        ['AssetZone', () => Serenity.StringEditor],
        ['AssetsAreaId', () => Serenity.StringEditor],
        ['AssetRoad', () => Serenity.StringEditor],
        ['AssetSection', () => Serenity.StringEditor],
        ['ItemQty', () => Serenity.DecimalEditor],
        ['ItemImages', () => Serenity.StringEditor],
        ['ItemDoc', () => Serenity.StringEditor],
        ['ItemLatLong', () => Serenity.StringEditor],
        ['Attachments', () => Serenity.StringEditor],
        ['CaseDate', () => Serenity.DateEditor],
        ['CaseAdress', () => Serenity.StringEditor],
        ['CaseAmount', () => Serenity.DecimalEditor],
        ['CaseDesc', () => Serenity.StringEditor],
        ['CaseSolution', () => Serenity.StringEditor],
        ['CaseStatus', () => Serenity.IntegerEditor],
        ['ItemImagesAfter', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(DistortionCasesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}