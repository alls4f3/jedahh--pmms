
namespace PMMS.Default {
    export class ZoneForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Zone';
    }

    export interface ZoneForm {
        ZoneNo: Serenity.DecimalEditor;
        ZoneName: Serenity.StringEditor;
        CityNo: Serenity.DecimalEditor;
    }

    [
        ['ZoneNo', () => Serenity.DecimalEditor],
        ['ZoneName', () => Serenity.StringEditor],
        ['CityNo', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(ZoneForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}