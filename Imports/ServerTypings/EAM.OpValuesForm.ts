
namespace PMMS.EAM {
    export class OpValuesForm extends Serenity.PrefixedContext {
        static formKey = 'EAM.OpValues';
    }

    export interface OpValuesForm {
    }

    [
    ].forEach(x => Object.defineProperty(OpValuesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}