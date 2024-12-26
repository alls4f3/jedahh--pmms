
namespace PMMS.EAM {
    export interface AssetSubCalcRow {
        ItemId?: number;
        Sid?: string;
        DisId?: number;
        Density?: string;
        TotalValue?: string;
    }

    export namespace AssetSubCalcRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'Sid';
        export const localTextPrefix = 'EAM.AssetSubCalc';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;
            export declare const Sid;
            export declare const DisId;
            export declare const Density;
            export declare const TotalValue;
        }

        [
            'ItemId',
            'Sid',
            'DisId',
            'Density',
            'TotalValue'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}