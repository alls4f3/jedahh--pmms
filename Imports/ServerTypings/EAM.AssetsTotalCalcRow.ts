
namespace PMMS.EAM {
    export interface AssetsTotalCalcRow {
        ItemId?: number;
        ItemName?: string;
        ItemOp?: string;
        ItemValue?: number;
        ItemThen?: number;
    }

    export namespace AssetsTotalCalcRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'EAM.AssetsTotalCalc';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;
            export declare const ItemName;
            export declare const ItemOp;
            export declare const ItemValue;
            export declare const ItemThen;
        }

        [
            'ItemId',
            'ItemName',
            'ItemOp',
            'ItemValue',
            'ItemThen'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}