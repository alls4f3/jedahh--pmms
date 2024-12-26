
namespace PMMS.Administration {
    export class WorkFlowStagesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.WorkFlowStages';
    }

    export interface WorkFlowStagesForm {
        StageName: Serenity.StringEditor;
        OnApproveGo: Serenity.IntegerEditor;
        OnRejectGo: Serenity.IntegerEditor;
        UserType: Serenity.IntegerEditor;
    }

    [,
        ['StageName', () => Serenity.StringEditor],
        ['OnApproveGo', () => Serenity.IntegerEditor],
        ['OnRejectGo', () => Serenity.IntegerEditor],
        ['UserType', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(WorkFlowStagesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}