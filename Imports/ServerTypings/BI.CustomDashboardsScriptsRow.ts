
namespace PMMS.BI {
    export interface CustomDashboardsScriptsRow {
        ScriptId?: number;
        PageId?: number;
        ScriptName?: string;
        ScriptApi?: string;
    }

    export namespace CustomDashboardsScriptsRow {
        export const idProperty = 'ScriptId';
        export const nameProperty = 'ScriptName';
        export const localTextPrefix = 'BI.CustomDashboardsScripts';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ScriptId;
            export declare const PageId;
            export declare const ScriptName;
            export declare const ScriptApi;
        }

        [
            'ScriptId',
            'PageId',
            'ScriptName',
            'ScriptApi'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}