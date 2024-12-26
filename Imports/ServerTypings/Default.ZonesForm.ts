
namespace PMMS.Default {
    export class ZonesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Zones';
    }

    export interface ZonesForm {
        ZoneName: Serenity.StringEditor;
        CityNo: Serenity.DecimalEditor;
    }

    [,
        ['ZoneName', () => Serenity.StringEditor],
        ['CityNo', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(ZonesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}