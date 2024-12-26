
namespace PMMS.Default {
    export class AreasForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Areas';
    }

    export interface AreasForm {
        AreaName: Serenity.StringEditor;
        ZoneNo: Serenity.DecimalEditor;
        AreaNo: Serenity.DecimalEditor;
        CityNo: Serenity.DecimalEditor;
    }

    [
        ['AreaName', () => Serenity.StringEditor],
        ['ZoneNo', () => Serenity.DecimalEditor],
        ['AreaNo', () => Serenity.DecimalEditor],
        ['CityNo', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(AreasForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}