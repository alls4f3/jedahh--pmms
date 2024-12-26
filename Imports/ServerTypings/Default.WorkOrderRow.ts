
namespace PMMS.Default {
    export interface WorkOrderRow {
        WorkOrderId?: number;
        ProjectName?: string;
        ContractName?: string;
        ProjectLocation?: string;
        DateOfOrderWork?: string;
        WorkDuration?: string;
        WorkorderStartDate?: string;
        WorkorderEndDate?: string;
        WorkorderRenewDate?: string;
        WorkorderNotes?: string;
        Doc1?: string;
        Doc2?: string;
        Doc3?: string;
        Doc4?: string;
        DocImageMap?: string;
        Remark1?: string;
        Remark2?: string;
        Remark3?: string;
        Remark4?: string;
        RemarkDate1?: string;
        RemarkDate2?: string;
        RemarkDate3?: string;
        Status: string;
    }

    export namespace WorkOrderRow {
        export const idProperty = 'WorkOrderId';
        export const nameProperty = 'ProjectName';
        export const localTextPrefix = 'Default.WorkOrder';
        export const deletePermission = 'Apps:Data:General';
        export const insertPermission = 'Apps:Data:General';
        export const readPermission = 'Apps:Data:General';
        export const updatePermission = 'Apps:Data:General';

        export namespace Fields {
            export declare const WorkOrderId;
            export declare const ProjectName;
            export declare const ContractName;
            export declare const ProjectLocation;
            export declare const DateOfOrderWork;
            export declare const WorkDuration;
            export declare const WorkorderStartDate;
            export declare const WorkorderEndDate;
            export declare const WorkorderRenewDate;
            export declare const WorkorderNotes;
            export declare const Doc1;
            export declare const Doc2;
            export declare const Doc3;
            export declare const Doc4;
            export declare const DocImageMap;
            export declare const Remark1;
            export declare const Remark2;
            export declare const Remark3;
            export declare const Remark4;
            export declare const RemarkDate1;
            export declare const RemarkDate2;
            export declare const RemarkDate3;
            export declare const Status;
        }

        [
            'WorkOrderId',
            'ProjectName',
            'ContractName',
            'ProjectLocation',
            'DateOfOrderWork',
            'WorkDuration',
            'WorkorderStartDate',
            'WorkorderEndDate',
            'WorkorderRenewDate',
            'WorkorderNotes',
            'Doc1',
            'Doc2',
            'Doc3',
            'Doc4',
            'DocImageMap',
            'Remark1',
            'Remark2',
            'Remark3',
            'Remark4',
            'RemarkDate1',
            'RemarkDate2',
            'RemarkDate3',
            'Status'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}