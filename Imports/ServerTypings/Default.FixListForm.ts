
namespace PMMS.Default {
    export class FixListForm extends Serenity.PrefixedContext {
        static formKey = 'Default.FixList';
    }

    export interface FixListForm {
    }

    [
    ].forEach(x => Object.defineProperty(FixListForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}