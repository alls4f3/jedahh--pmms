
namespace PMMS.Default {
    export interface ImportWizerdLocalRow {
        FileName?: string;
        ImportType?: string;
        ImportDate?: string;
        ImportRef?: string;
        ImportBy?: string;
        ImportId?: number;
        ContentUrl?: string;
        ContentUrlFwd?: string;
        ContentUrlIri?: string;
        ContentUrlSkid?: string;
        Status?: string;
        StatusMessage?: string;
        SurvayDate?: string;
        DisplayStreet?: string;
        DisplayLane?: string;
        DisplayArea?: string;
        DisplayCity?: string;
        DisplaySection?: string;
        DisplayStreetName?: string;
    }

    export namespace ImportWizerdLocalRow {
        export const idProperty = 'ImportId';
        export const nameProperty = 'FileName';
        export const localTextPrefix = 'Default.ImportWizerdLocal';
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
            export declare const ContentUrlFwd;
            export declare const ContentUrlIri;
            export declare const ContentUrlSkid;
            export declare const Status;
            export declare const StatusMessage;
            export declare const SurvayDate;
            export declare const DisplayStreet;
            export declare const DisplayLane;
            export declare const DisplayArea;
            export declare const DisplayCity;
            export declare const DisplaySection;
            export declare const DisplayStreetName;
        }

        [
            'FileName',
            'ImportType',
            'ImportDate',
            'ImportRef',
            'ImportBy',
            'ImportId',
            'ContentUrl',
            'ContentUrlFwd',
            'ContentUrlIri',
            'ContentUrlSkid',
            'Status',
            'StatusMessage',
            'SurvayDate',
            'DisplayStreet',
            'DisplayLane',
            'DisplayArea',
            'DisplayCity',
            'DisplaySection',
            'DisplayStreetName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}