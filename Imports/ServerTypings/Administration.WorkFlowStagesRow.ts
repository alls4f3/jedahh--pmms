
namespace PMMS.Administration {
    export interface WorkFlowStagesRow {
        StageId?: number;
        StageName?: string;
        OnApproveGo?: number;
        OnRejectGo?: number;
        UserType?: number;
    }

    export namespace WorkFlowStagesRow {
        export const idProperty = 'StageId';
        export const nameProperty = 'StageName';
        export const localTextPrefix = 'Administration.WorkFlowStages';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const StageId;
            export declare const StageName;
            export declare const OnApproveGo;
            export declare const OnRejectGo;
            export declare const UserType;
        }

        [
            'StageId',
            'StageName',
            'OnApproveGo',
            'OnRejectGo',
            'UserType'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}