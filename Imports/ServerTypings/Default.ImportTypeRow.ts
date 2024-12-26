
namespace PMMS.Default {
    export interface ImportTypeRow {
        TypeId?: number;
        TypeName?: string;
    }

    export namespace ImportTypeRow {
        export const idProperty = 'TypeId';
        export const nameProperty = 'TypeName';
        export const localTextPrefix = 'Default.ImportType';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const TypeId;
            export declare const TypeName;
        }

        [
            'TypeId',
            'TypeName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}