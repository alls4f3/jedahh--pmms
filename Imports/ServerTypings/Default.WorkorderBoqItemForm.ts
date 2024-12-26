
namespace PMMS.Default {
    export class WorkorderBoqItemForm extends Serenity.PrefixedContext {
        static formKey = 'Default.WorkorderBoqItem';
    }

    export interface WorkorderBoqItemForm {
        ItmCode: Serenity.StringEditor;
        ItmSeq: Serenity.DecimalEditor;
        ItmDesc: Serenity.StringEditor;
        ContractId: Serenity.DecimalEditor;
        Unit: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        Woid: Serenity.IntegerEditor;
        ExecQty: Serenity.DecimalEditor;
        Prev_EXEC_QTY: Serenity.DecimalEditor;
        REMAINDER: Serenity.DecimalEditor;
    }

    [,
        ['ItmCode', () => Serenity.StringEditor],
        ['ItmSeq', () => Serenity.DecimalEditor],
        ['ItmDesc', () => Serenity.StringEditor],
        ['ContractId', () => Serenity.DecimalEditor],
        ['Unit', () => Serenity.StringEditor],
        ['Qty', () => Serenity.DecimalEditor],
        ['Woid', () => Serenity.IntegerEditor],
        ['ExecQty', () => Serenity.DecimalEditor],
        ['Prev_EXEC_QTY', () => Serenity.DecimalEditor],
        ['REMAINDER', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(WorkorderBoqItemForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}