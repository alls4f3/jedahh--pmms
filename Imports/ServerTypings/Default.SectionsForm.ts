
namespace PMMS.Default {
    export class SectionsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Sections';
    }

    export interface SectionsForm {
        RoadNo: Serenity.DecimalEditor;
        AreaNo: Serenity.DecimalEditor;
        CityNo: Serenity.DecimalEditor;
        ZoneNo: Serenity.DecimalEditor;
        SectionNo: Serenity.DecimalEditor;
    }

    [
        ['RoadNo', () => Serenity.DecimalEditor],
        ['AreaNo', () => Serenity.DecimalEditor],
        ['CityNo', () => Serenity.DecimalEditor],
        ['ZoneNo', () => Serenity.DecimalEditor],
        ['SectionNo', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(SectionsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}