
namespace PMMS.Default {
    export interface DepartmentRow {
        DepartmentId?: number;
        DepartmentName?: string;
    }

    export namespace DepartmentRow {
        export const idProperty = 'DepartmentId';
        export const nameProperty = 'DepartmentName';
        export const localTextPrefix = 'Default.Department';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const DepartmentId;
            export declare const DepartmentName;
        }

        [
            'DepartmentId',
            'DepartmentName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}