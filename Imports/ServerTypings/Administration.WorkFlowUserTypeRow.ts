
namespace PMMS.Administration {
    export interface WorkFlowUserTypeRow {
        UserTypeId?: number;
        UserTypeName?: string;
        AssignType?: number;
    }

    export namespace WorkFlowUserTypeRow {
        export const idProperty = 'UserTypeId';
        export const nameProperty = 'UserTypeName';
        export const localTextPrefix = 'Administration.WorkFlowUserType';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const UserTypeId;
            export declare const UserTypeName;
            export declare const AssignType;
        }

        [
            'UserTypeId',
            'UserTypeName',
            'AssignType'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}