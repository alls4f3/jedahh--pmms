
namespace PMMS.Default {
    export class WorkOrderEmergencyForm extends Serenity.PrefixedContext {
        static formKey = 'Default.WorkOrderEmergency';
    }

    export interface WorkOrderEmergencyForm {
        Ename: Serenity.StringEditor;
    }

    [,
        ['Ename', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(WorkOrderEmergencyForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}