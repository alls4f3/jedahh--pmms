
namespace PMMS.EAM {
    export class AssetBuildingForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.AssetBuilding';
    }

    export interface AssetBuildingForm {
        ItemName: Serenity.StringEditor;
        CityId: Serenity.IntegerEditor;
        ItemDesc: Serenity.StringEditor;
        NumberOfFloor: Serenity.DecimalEditor;
        LatLong: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor],
        ['CityId', () => Serenity.IntegerEditor],
        ['ItemDesc', () => Serenity.StringEditor],
        ['NumberOfFloor', () => Serenity.DecimalEditor],
        ['LatLong', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AssetBuildingForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}