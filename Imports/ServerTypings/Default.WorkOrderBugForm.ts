
namespace PMMS.Default {
    export class WorkOrderBugForm extends Serenity.PrefixedContext {
        static formKey = 'Default.WorkOrderBug';
    }

    export interface WorkOrderBugForm {
        ItemBugName: Serenity.StringEditor;
        WorkOrderId: Serenity.IntegerEditor;
    }

    [,
        ['ItemBugName', () => Serenity.StringEditor],
        ['WorkOrderId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(WorkOrderBugForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}