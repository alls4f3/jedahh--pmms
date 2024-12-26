
namespace PMMS.Administration {
    export interface CustomReportsRow {
        ReportId?: number;
        ReportName?: string;
        ReportPath?: string;
    }

    export namespace CustomReportsRow {
        export const idProperty = 'ReportId';
        export const nameProperty = 'ReportName';
        export const localTextPrefix = 'Administration.CustomReports';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ReportId;
            export declare const ReportName;
            export declare const ReportPath;
        }

        [
            'ReportId',
            'ReportName',
            'ReportPath'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}