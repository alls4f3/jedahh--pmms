
namespace PMMS.Default {
    export interface WorkOrderFixRow {
        ItemFixId?: number;
        ItemFixName?: string;
        WorkOrderId?: number;
    }

    export namespace WorkOrderFixRow {
        export const idProperty = 'ItemFixId';
        export const nameProperty = 'ItemFixName';
        export const localTextPrefix = 'Default.WorkOrderFix';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ItemFixId;
            export declare const ItemFixName;
            export declare const WorkOrderId;
        }

        [
            'ItemFixId',
            'ItemFixName',
            'WorkOrderId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}