
namespace PMMS.Default {
    export interface CityRow {
        No?: number;
        Name?: string;
    }

    export namespace CityRow {
        export const idProperty = 'No';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.City';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const No;
            export declare const Name;
        }

        [
            'No',
            'Name'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}