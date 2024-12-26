
namespace PMMS.Default {
    export interface ImportWizerdRow {
        FileName?: string;
        ImportType?: string;
        ImportDate?: string;
        ImportRef?: string;
        ImportBy?: string;
        ImportId?: number;
        ContentUrl?: string;
    }

    export namespace ImportWizerdRow {
        export const idProperty = 'ImportId';
        export const nameProperty = 'FileName';
        export const localTextPrefix = 'Default.ImportWizerd';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const FileName;
            export declare const ImportType;
            export declare const ImportDate;
            export declare const ImportRef;
            export declare const ImportBy;
            export declare const ImportId;
            export declare const ContentUrl;
        }

        [
            'FileName',
            'ImportType',
            'ImportDate',
            'ImportRef',
            'ImportBy',
            'ImportId',
            'ContentUrl'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}