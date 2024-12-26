
namespace PMMS.Default {
    export interface WorkorderItemStatusRow {
        ItemId?: number;
        ItemName?: string;
        IsClosed?: boolean;
    }

    export namespace WorkorderItemStatusRow {
        export const idProperty = 'ItemId';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'Default.WorkorderItemStatus';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemId;
            export declare const ItemName;
            export declare const IsClosed;
        }

        [
            'ItemId',
            'ItemName',
            'IsClosed'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}