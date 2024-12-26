
namespace PMMS.Default {
    export interface WorkOrderEmergencyRow {
        EId?: number;
        Ename?: string;
    }

    export namespace WorkOrderEmergencyRow {
        export const idProperty = 'EId';
        export const nameProperty = 'Ename';
        export const localTextPrefix = 'Default.WorkOrderEmergency';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const EId;
            export declare const Ename;
        }

        [
            'EId',
            'Ename'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}