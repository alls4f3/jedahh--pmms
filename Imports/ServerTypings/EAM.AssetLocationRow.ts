
namespace PMMS.EAM {
    export interface AssetLocationRow {
        ItemId?: number;
        ItemName?: string;
    }

    export namespace AssetLocationRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'EAM.AssetLocation';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;
            export declare const ItemName;
        }

        [
            'ItemId',
            'ItemName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}