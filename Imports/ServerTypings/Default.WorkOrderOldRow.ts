
namespace PMMS.Default {
    export interface WorkOrderOldRow {
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
        RefId?: number;
        Status?: string;
        WorkflowStage?: string;
        WorkflowStagename?: string;
        AssignTo?: string;
        Doc5?: string;
        Doc6?: string;
        Doc7?: string;
        Doc8?: string;
        CreatedDate?: string;
        LastUpdate?: string;
        DocImageMapKey?: string;
        WorkOrderLocation?: string;
        WorkorderCity?: string;
        WorkorderZone?: string;
        WorkorderArea?: string;
        WorkorderRoad?: string;
        WorkorderSection?: string;
        DocOther2?: string;
        DocOther1?: string;
        YearsOfLife?: number;
        WarrantyStartDate?: string;
        WarrantyEndDate?: string;
        WorkorderLane?: string;
        BlockDate?: string;
        AutoSkip?: boolean;
        SeqN?: string;
        Emergency?: number;
        StatusCode?: string;
        DepId?: string;
        DisplayStreet?: string;
        DisplayZone?: string;
        DisplayArea?: string;
        DisplayCity?: string;
        DisplaySection?: string;
        UserGroup?: number;
    }

    export namespace WorkOrderOldRow {
        export const idProperty = 'WorkOrderId';
        export const nameProperty = 'ProjectName';
        export const localTextPrefix = 'Default.WorkOrderOld';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

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
            export declare const RefId;
            export declare const Status;
            export declare const WorkflowStage;
            export declare const WorkflowStagename;
            export declare const AssignTo;
            export declare const Doc5;
            export declare const Doc6;
            export declare const Doc7;
            export declare const Doc8;
            export declare const CreatedDate;
            export declare const LastUpdate;
            export declare const DocImageMapKey;
            export declare const WorkOrderLocation;
            export declare const WorkorderCity;
            export declare const WorkorderZone;
            export declare const WorkorderArea;
            export declare const WorkorderRoad;
            export declare const WorkorderSection;
            export declare const DocOther2;
            export declare const DocOther1;
            export declare const YearsOfLife;
            export declare const WarrantyStartDate;
            export declare const WarrantyEndDate;
            export declare const WorkorderLane;
            export declare const BlockDate;
            export declare const AutoSkip;
            export declare const SeqN;
            export declare const Emergency;
            export declare const StatusCode;
            export declare const DepId;
            export declare const DisplayStreet;
            export declare const DisplayZone;
            export declare const DisplayArea;
            export declare const DisplayCity;
            export declare const DisplaySection;
            export declare const UserGroup;
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
            'RefId',
            'Status',
            'WorkflowStage',
            'WorkflowStagename',
            'AssignTo',
            'Doc5',
            'Doc6',
            'Doc7',
            'Doc8',
            'CreatedDate',
            'LastUpdate',
            'DocImageMapKey',
            'WorkOrderLocation',
            'WorkorderCity',
            'WorkorderZone',
            'WorkorderArea',
            'WorkorderRoad',
            'WorkorderSection',
            'DocOther2',
            'DocOther1',
            'YearsOfLife',
            'WarrantyStartDate',
            'WarrantyEndDate',
            'WorkorderLane',
            'BlockDate',
            'AutoSkip',
            'SeqN',
            'Emergency',
            'StatusCode',
            'DepId',
            'DisplayStreet',
            'DisplayZone',
            'DisplayArea',
            'DisplayCity',
            'DisplaySection',
            'UserGroup'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}