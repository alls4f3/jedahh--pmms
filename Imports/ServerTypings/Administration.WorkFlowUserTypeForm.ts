
namespace PMMS.Administration {
    export class WorkFlowUserTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.WorkFlowUserType';
    }

    export interface WorkFlowUserTypeForm {
        UserTypeName: Serenity.StringEditor;
        AssignType: Serenity.IntegerEditor;
    }

    [,
        ['UserTypeName', () => Serenity.StringEditor],
        ['AssignType', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(WorkFlowUserTypeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}