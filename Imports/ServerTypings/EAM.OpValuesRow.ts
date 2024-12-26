
namespace PMMS.EAM {
    export interface OpValuesRow {
        OpValues?: string;
    }

    export namespace OpValuesRow {
        export const idProperty = 'OpValues';
        export const nameProperty = 'OpValues';
        export const localTextPrefix = 'EAM.OpValues';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const OpValues;
        }

        [
            'OpValues'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}