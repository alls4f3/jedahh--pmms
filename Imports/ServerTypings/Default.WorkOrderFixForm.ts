
namespace PMMS.Default {
    export class WorkOrderFixForm extends Serenity.PrefixedContext {
        static formKey = 'Default.WorkOrderFix';
    }

    export interface WorkOrderFixForm {
        ItemFixName: Serenity.StringEditor;
        WorkOrderId: Serenity.IntegerEditor;
    }

    [,
        ['ItemFixName', () => Serenity.StringEditor],
        ['WorkOrderId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(WorkOrderFixForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}