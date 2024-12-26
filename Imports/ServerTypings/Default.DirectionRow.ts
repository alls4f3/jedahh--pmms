
namespace PMMS.Default {
    export interface DirectionRow {
        DirectionNo?: string;
        DirectionShortName?: string;
        DirectionDescription?: string;
        ItemId?: number;
    }

    export namespace DirectionRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'DirectionNo';
        export const localTextPrefix = 'Default.Direction';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const DirectionNo;
            export declare const DirectionShortName;
            export declare const DirectionDescription;
            export declare const ItemId;
        }

        [
            'DirectionNo',
            'DirectionShortName',
            'DirectionDescription',
            'ItemId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}