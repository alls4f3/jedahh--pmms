
namespace PMMS.Default {
    export interface ImportWizerdByEqFilesRow {
        FileName?: string;
        ImportType?: string;
        ImportDate?: string;
        ImportRef?: string;
        ImportBy?: string;
        ImportId?: number;
        Status?: string;
        StatusMessage?: string;
        SurvayDate?: string;
        GroupSurvey?: number;
        ImportUrl?: string;
    }

    export namespace ImportWizerdByEqFilesRow {
        export const idProperty = 'ImportId';
        export const nameProperty = 'FileName';
        export const localTextPrefix = 'Default.ImportWizerdByEqFiles';
        export const deletePermission = 'Apps:Data:ImportDataEntry';
        export const insertPermission = 'Apps:Data:ImportDataEntry';
        export const readPermission = 'Apps:Data:ImportDataEntry';
        export const updatePermission = 'Apps:Data:ImportDataEntry';

        export namespace Fields {
            export declare const FileName;
            export declare const ImportType;
            export declare const ImportDate;
            export declare const ImportRef;
            export declare const ImportBy;
            export declare const ImportId;
            export declare const Status;
            export declare const StatusMessage;
            export declare const SurvayDate;
            export declare const GroupSurvey;
            export declare const ImportUrl;
        }

        [
            'FileName',
            'ImportType',
            'ImportDate',
            'ImportRef',
            'ImportBy',
            'ImportId',
            'Status',
            'StatusMessage',
            'SurvayDate',
            'GroupSurvey',
            'ImportUrl'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}