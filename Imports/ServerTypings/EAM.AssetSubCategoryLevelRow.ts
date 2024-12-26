
namespace PMMS.EAM {
    export interface AssetSubCategoryLevelRow {
        ItemId?: number;
        ItemName?: string;
        ParentId?: number;
    }

    export namespace AssetSubCategoryLevelRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'EAM.AssetSubCategoryLevel';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;
            export declare const ItemName;
            export declare const ParentId;
        }

        [
            'ItemId',
            'ItemName',
            'ParentId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}