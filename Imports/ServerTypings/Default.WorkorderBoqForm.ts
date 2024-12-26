
namespace PMMS.Default {
    export class WorkorderBoqForm extends Serenity.PrefixedContext {
        static formKey = 'Default.WorkorderBoq';
    }

    export interface WorkorderBoqForm {
        ItmCode: Serenity.StringEditor;
        ItmSeq: Serenity.DecimalEditor;
        ItmDesc: Serenity.StringEditor;
        ContractId: Serenity.DecimalEditor;
        Unit: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        Remainder: Serenity.DecimalEditor;
        ExecQty: Serenity.DecimalEditor;
    }

    [,
        ['ItmCode', () => Serenity.StringEditor],
        ['ItmSeq', () => Serenity.DecimalEditor],
        ['ItmDesc', () => Serenity.StringEditor],
        ['ContractId', () => Serenity.DecimalEditor],
        ['Unit', () => Serenity.StringEditor],
        ['Qty', () => Serenity.DecimalEditor],
        ['Remainder', () => Serenity.DecimalEditor],
        ['ExecQty', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(WorkorderBoqForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}