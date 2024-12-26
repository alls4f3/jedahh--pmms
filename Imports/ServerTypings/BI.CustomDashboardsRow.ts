
namespace PMMS.BI {
    export interface CustomDashboardsRow {
        PageId?: number;
        PageName?: string;
        PagePath?: string;
        PageUsers?: string;
        PageGroups?: string;
    }

    export namespace CustomDashboardsRow {
        export const idProperty = 'PageId';
        export const nameProperty = 'PageName';
        export const localTextPrefix = 'BI.CustomDashboards';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const PageId;
            export declare const PageName;
            export declare const PagePath;
            export declare const PageUsers;
            export declare const PageGroups;
        }

        [
            'PageId',
            'PageName',
            'PagePath',
            'PageUsers',
            'PageGroups'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}