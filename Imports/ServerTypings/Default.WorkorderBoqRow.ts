
namespace PMMS.Default {
    export interface WorkorderBoqRow {
        ItemId?: number;
        ItmCode?: string;
        ItmSeq?: number;
        ItmDesc?: string;
        ContractId?: number;
        Unit?: string;
        Qty?: number;
        Remainder?: number;
        ExecQty?: number;
    }

    export namespace WorkorderBoqRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'ItmCode';
        export const localTextPrefix = 'Default.WorkorderBoq';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;
            export declare const ItmCode;
            export declare const ItmSeq;
            export declare const ItmDesc;
            export declare const ContractId;
            export declare const Unit;
            export declare const Qty;
            export declare const Remainder;
            export declare const ExecQty;
        }

        [
            'ItemId',
            'ItmCode',
            'ItmSeq',
            'ItmDesc',
            'ContractId',
            'Unit',
            'Qty',
            'Remainder',
            'ExecQty'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}