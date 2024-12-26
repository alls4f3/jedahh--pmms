
namespace PMMS.Default {
    export class BugsListForm extends Serenity.PrefixedContext {
        static formKey = 'Default.BugsList';
    }

    export interface BugsListForm {
    }

    [
    ].forEach(x => Object.defineProperty(BugsListForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}