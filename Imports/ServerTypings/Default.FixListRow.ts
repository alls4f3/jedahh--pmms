
namespace PMMS.Default {
    export interface FixListRow {
        ItemName?: string;
    }

    export namespace FixListRow {
        export const idProperty = 'ItemName';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'Default.FixList';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemName;
        }

        [
            'ItemName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}