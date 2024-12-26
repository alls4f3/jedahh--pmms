
namespace PMMS.EAM {
    export interface AssetsSeverityRow {
        SCode?: string;
        SName?: string;
    }

    export namespace AssetsSeverityRow {
        export const idProperty = 'SCode';
        export const nameProperty = 'SCode';
        export const localTextPrefix = 'EAM.AssetsSeverity';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const SCode;
            export declare const SName;
        }

        [
            'SCode',
            'SName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}