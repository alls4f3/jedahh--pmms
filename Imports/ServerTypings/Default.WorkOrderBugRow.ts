
namespace PMMS.Default {
    export interface WorkOrderBugRow {
        ItemBugId?: number;
        ItemBugName?: string;
        WorkOrderId?: number;
    }

    export namespace WorkOrderBugRow {
        export const idProperty = 'ItemBugId';
        export const nameProperty = 'ItemBugName';
        export const localTextPrefix = 'Default.WorkOrderBug';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemBugId;
            export declare const ItemBugName;
            export declare const WorkOrderId;
        }

        [
            'ItemBugId',
            'ItemBugName',
            'WorkOrderId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}