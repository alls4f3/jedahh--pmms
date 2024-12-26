
namespace PMMS.EAM {
    export interface AssetClassRow {
        ItemId?: number;
        ParentId?: number;
        ItemName?: string;
    }

    export namespace AssetClassRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'EAM.AssetClass';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;

            export declare const ParentId;
            export declare const ItemName;
            
        }

        [
            'ItemId',
            'ParentId',
            'ItemName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}