
namespace PMMS.Distortion {
    export class DistortionStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Distortion.DistortionStatus';
    }

    export interface DistortionStatusForm {
        ItemName: Serenity.StringEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(DistortionStatusForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}