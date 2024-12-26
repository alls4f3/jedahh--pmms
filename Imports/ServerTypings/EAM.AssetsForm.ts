
namespace PMMS.EAM {
    export class AssetsForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.Assets';
    }

    export interface AssetsForm {
        AsseName: Serenity.StringEditor;
        AssetBarcode: Serenity.StringEditor;
        AssetSerial: Serenity.StringEditor;
        AssetType: Serenity.IntegerEditor;
        AssetCategory: Serenity.IntegerEditor;
        AssetSubCategory: Serenity.IntegerEditor;
        AssetLocation: Serenity.IntegerEditor;
        AssetStartDate: Serenity.DateEditor;
        AssetEndDate: Serenity.DateEditor;
        AssetMaunfacture: Serenity.StringEditor;
        AssetProject: Serenity.IntegerEditor;
        AssetContractor: Serenity.IntegerEditor;
        AssetVendor: Serenity.IntegerEditor;
        AssetInspector: Serenity.IntegerEditor;
        AssetParent: Serenity.IntegerEditor;
        AssetStatus: Serenity.IntegerEditor;
        AssetClass: Serenity.IntegerEditor;
        AssetClassDescription: Serenity.StringEditor;
        AssetAutoDepc: Serenity.BooleanEditor;
        AssetDepcMethod: Serenity.StringEditor;
        AssetDepcInMonth: Serenity.IntegerEditor;
        AssetDepcPrec: Serenity.IntegerEditor;
        AssetDepcDate: Serenity.DateEditor;
        AssetDepcStatus: Serenity.IntegerEditor;
        InstallDate: Serenity.DateEditor;
        InstallAccetpedDate: Serenity.DateEditor;
        PurchasePrice: Serenity.DecimalEditor;
        YearsOfLife: Serenity.IntegerEditor;
        WarrantyStartDate: Serenity.DateEditor;
        WarrantyEndDate: Serenity.DateEditor;
        MaintSubSet: Serenity.IntegerEditor;
        MaintCondation: Serenity.IntegerEditor;
        MaintCrit: Serenity.IntegerEditor;
        MaintLastCheckDate: Serenity.DateEditor;
        AssetWidth: Serenity.DecimalEditor;
        AssetHight: Serenity.DecimalEditor;
        AssetArea: Serenity.DecimalEditor;
        AssetDimansion: Serenity.IntegerEditor;
        AssetWeight: Serenity.DecimalEditor;
        AssetPower: Serenity.DecimalEditor;
        AssetServiceStatus: Serenity.IntegerEditor;
        MaintPowerConsumption: Serenity.DecimalEditor;
        AssetCity: Serenity.StringEditor;
        AssetZone: Serenity.StringEditor;
        AssetsAreaId: Serenity.StringEditor;
        AssetRoad: Serenity.StringEditor;
        AssetSection: Serenity.StringEditor;
        AssetQty: Serenity.DecimalEditor;
    }

    [,
        ['AsseName', () => Serenity.StringEditor],
        ['AssetBarcode', () => Serenity.StringEditor],
        ['AssetSerial', () => Serenity.StringEditor],
        ['AssetType', () => Serenity.IntegerEditor],
        ['AssetCategory', () => Serenity.IntegerEditor],
        ['AssetSubCategory', () => Serenity.IntegerEditor],
        ['AssetLocation', () => Serenity.IntegerEditor],
        ['AssetStartDate', () => Serenity.DateEditor],
        ['AssetEndDate', () => Serenity.DateEditor],
        ['AssetMaunfacture', () => Serenity.StringEditor],
        ['AssetProject', () => Serenity.IntegerEditor],
        ['AssetContractor', () => Serenity.IntegerEditor],
        ['AssetVendor', () => Serenity.IntegerEditor],
        ['AssetInspector', () => Serenity.IntegerEditor],
        ['AssetParent', () => Serenity.IntegerEditor],
        ['AssetStatus', () => Serenity.IntegerEditor],
        ['AssetClass', () => Serenity.IntegerEditor],
        ['AssetClassDescription', () => Serenity.StringEditor],
        ['AssetAutoDepc', () => Serenity.BooleanEditor],
        ['AssetDepcMethod', () => Serenity.StringEditor],
        ['AssetDepcInMonth', () => Serenity.IntegerEditor],
        ['AssetDepcPrec', () => Serenity.IntegerEditor],
        ['AssetDepcDate', () => Serenity.DateEditor],
        ['AssetDepcStatus', () => Serenity.IntegerEditor],
        ['InstallDate', () => Serenity.DateEditor],
        ['InstallAccetpedDate', () => Serenity.DateEditor],
        ['PurchasePrice', () => Serenity.DecimalEditor],
        ['YearsOfLife', () => Serenity.IntegerEditor],
        ['WarrantyStartDate', () => Serenity.DateEditor],
        ['WarrantyEndDate', () => Serenity.DateEditor],
        ['MaintSubSet', () => Serenity.IntegerEditor],
        ['MaintCondation', () => Serenity.IntegerEditor],
        ['MaintCrit', () => Serenity.IntegerEditor],
        ['MaintLastCheckDate', () => Serenity.DateEditor],
        ['AssetWidth', () => Serenity.DecimalEditor],
        ['AssetHight', () => Serenity.DecimalEditor],
        ['AssetArea', () => Serenity.DecimalEditor],
        ['AssetDimansion', () => Serenity.IntegerEditor],
        ['AssetWeight', () => Serenity.DecimalEditor],
        ['AssetPower', () => Serenity.DecimalEditor],
        ['AssetServiceStatus', () => Serenity.IntegerEditor],
        ['MaintPowerConsumption', () => Serenity.DecimalEditor],
        ['AssetCity', () => Serenity.StringEditor],
        ['AssetZone', () => Serenity.StringEditor],
        ['AssetsAreaId', () => Serenity.StringEditor],
        ['AssetRoad', () => Serenity.StringEditor],
        ['AssetSection', () => Serenity.StringEditor],
        ['AssetQty', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(AssetsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}