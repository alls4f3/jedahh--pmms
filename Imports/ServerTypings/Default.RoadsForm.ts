
namespace PMMS.Default {
    export class RoadsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Roads';
    }

    export interface RoadsForm {
        RoadNo: Serenity.StringEditor;
        RoadName: Serenity.StringEditor;
       
        IsActive: Serenity.BooleanEditor;
    }

    [
        ['RoadNo', () => Serenity.StringEditor],
        ['RoadName', () => Serenity.StringEditor],

        ['IsActive', () => Serenity.BooleanEditor],

      
    ].forEach(x => Object.defineProperty(RoadsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}