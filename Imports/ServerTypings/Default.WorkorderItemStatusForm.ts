
namespace PMMS.Default {
    export class WorkorderItemStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Default.WorkorderItemStatus';
    }

    export interface WorkorderItemStatusForm {
        ItemName: Serenity.StringEditor;
        IsClosed: Serenity.BooleanEditor;
    }

    [,
        ['ItemName', () => Serenity.StringEditor],
        ['IsClosed', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(WorkorderItemStatusForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}