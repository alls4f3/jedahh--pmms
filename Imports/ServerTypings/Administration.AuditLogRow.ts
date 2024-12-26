
namespace PMMS.Administration {
    export interface AuditLogRow {
        Id?: number;
        UserId?: number;
        UserName?: string;
        Action?: string;
        ChangedOn?: string;
        TableName?: string;
        RowId?: number;
        Module?: string;
        Page?: string;
        Changes?: string;
    }

    export namespace AuditLogRow {
        export const idProperty = 'Id';
        export const nameProperty = 'UserName';
        export const localTextPrefix = 'Administration.AuditLog';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const UserId;
            export declare const UserName;
            export declare const Action;
            export declare const ChangedOn;
            export declare const TableName;
            export declare const RowId;
            export declare const Module;
            export declare const Page;
            export declare const Changes;
        }

        [
            'Id',
            'UserId',
            'UserName',
            'Action',
            'ChangedOn',
            'TableName',
            'RowId',
            'Module',
            'Page',
            'Changes'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}