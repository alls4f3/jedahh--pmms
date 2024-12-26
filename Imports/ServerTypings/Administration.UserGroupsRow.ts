
namespace PMMS.Administration {
    export interface UserGroupsRow {
        UserGroupId?: number;
        UserGroupName?: string;
    }

    export namespace UserGroupsRow {
        export const idProperty = 'UserGroupId';
        export const nameProperty = 'UserGroupName';
        export const localTextPrefix = 'Administration.UserGroups';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const UserGroupId;
            export declare const UserGroupName;
        }

        [
            'UserGroupId',
            'UserGroupName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}