
namespace PMMS.Default {
    export class SectionForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Section';
    }

    export interface SectionForm {
        RoadNo: Serenity.StringEditor;
        AreaNo: Serenity.DecimalEditor;
        CityNo: Serenity.StringEditor;
        ZoneNo: Serenity.StringEditor;
        SectionNo: Serenity.StringEditor;
        SecName: Serenity.StringEditor;
    }

    [
        ['RoadNo', () => Serenity.StringEditor],
        ['AreaNo', () => Serenity.DecimalEditor],
        ['CityNo', () => Serenity.StringEditor],
        ['ZoneNo', () => Serenity.StringEditor],
        ['SectionNo', () => Serenity.StringEditor],
        ['SecName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SectionForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}