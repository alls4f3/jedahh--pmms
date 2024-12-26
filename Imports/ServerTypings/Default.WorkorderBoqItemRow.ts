
namespace PMMS.Default {
    export interface WorkorderBoqItemRow {
        BItemId?: number;
        ItmCode?: string;
        ItmSeq?: number;
        ItmDesc?: string;
        ContractId?: number;
        Unit?: string;
        Qty?: number;
        Woid?: number;
        ExecQty?: number;
        REMAINDER?: number;
        Status?: string;

    }

    export namespace WorkorderBoqItemRow {
        export const idProperty = 'BItemId';
        export const nameProperty = 'ItmCode';
        export const localTextPrefix = 'Default.WorkorderBoqItem';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const BItemId;
            export declare const ItmCode;
            export declare const ItmSeq;
            export declare const ItmDesc;
            export declare const ContractId;
            export declare const Unit;
            export declare const Qty;
            export declare const Woid;
            export declare const ExecQty;
            export declare const REMAINDER;
            export declare const Status;

        }

        [
            'BItemId',
            'ItmCode',
            'ItmSeq',
            'ItmDesc',
            'ContractId',
            'Unit',
            'Qty',
            'Woid',
            'ExecQty',
            'REMAINDER',
            'Status',

        ].forEach(x => (<any>Fields)[x] = x);
    }
}