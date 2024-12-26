
namespace PMMS.Default {
    export class WorkOrderOldForm extends Serenity.PrefixedContext {
        static formKey = 'Default.WorkOrderOld';
    }

    export interface WorkOrderOldForm {
        ProjectName: Serenity.StringEditor;
        ContractName: Serenity.StringEditor;
        ProjectLocation: Serenity.StringEditor;
        DateOfOrderWork: Serenity.DateEditor;
        WorkDuration: Serenity.StringEditor;
        WorkorderStartDate: Serenity.StringEditor;
        WorkorderEndDate: Serenity.DateEditor;
        WorkorderRenewDate: Serenity.DateEditor;
        WorkorderNotes: Serenity.StringEditor;
        Doc1: Serenity.StringEditor;
        Doc2: Serenity.StringEditor;
        Doc3: Serenity.StringEditor;
        Doc4: Serenity.StringEditor;
        DocImageMap: Serenity.StringEditor;
        Remark1: Serenity.StringEditor;
        Remark2: Serenity.StringEditor;
        Remark3: Serenity.StringEditor;
        Remark4: Serenity.StringEditor;
        RemarkDate1: Serenity.DateEditor;
        RemarkDate2: Serenity.DateEditor;
        RemarkDate3: Serenity.DateEditor;
        RefId: Serenity.IntegerEditor;
        Status: Serenity.StringEditor;
        WorkflowStage: Serenity.StringEditor;
        WorkflowStagename: Serenity.StringEditor;
        AssignTo: Serenity.StringEditor;
        Doc5: Serenity.StringEditor;
        Doc6: Serenity.StringEditor;
        Doc7: Serenity.StringEditor;
        Doc8: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        LastUpdate: Serenity.DateEditor;
        DocImageMapKey: Serenity.StringEditor;
        WorkOrderLocation: Serenity.StringEditor;
        WorkorderCity: Serenity.StringEditor;
        WorkorderZone: Serenity.StringEditor;
        WorkorderArea: Serenity.StringEditor;
        WorkorderRoad: Serenity.StringEditor;
        WorkorderSection: Serenity.StringEditor;
        DocOther2: Serenity.StringEditor;
        DocOther1: Serenity.StringEditor;
        YearsOfLife: Serenity.IntegerEditor;
        WarrantyStartDate: Serenity.DateEditor;
        WarrantyEndDate: Serenity.DateEditor;
        WorkorderLane: Serenity.StringEditor;
        BlockDate: Serenity.DateEditor;
        AutoSkip: Serenity.BooleanEditor;
        SeqN: Serenity.StringEditor;
        Emergency: Serenity.IntegerEditor;
        StatusCode: Serenity.StringEditor;
        DepId: Serenity.StringEditor;
        DisplayStreet: Serenity.StringEditor;
        DisplayZone: Serenity.StringEditor;
        DisplayArea: Serenity.StringEditor;
        DisplayCity: Serenity.StringEditor;
        DisplaySection: Serenity.StringEditor;
        UserGroup: Serenity.IntegerEditor;
    }

    [,
        ['ProjectName', () => Serenity.StringEditor],
        ['ContractName', () => Serenity.StringEditor],
        ['ProjectLocation', () => Serenity.StringEditor],
        ['DateOfOrderWork', () => Serenity.DateEditor],
        ['WorkDuration', () => Serenity.StringEditor],
        ['WorkorderStartDate', () => Serenity.StringEditor],
        ['WorkorderEndDate', () => Serenity.DateEditor],
        ['WorkorderRenewDate', () => Serenity.DateEditor],
        ['WorkorderNotes', () => Serenity.StringEditor],
        ['Doc1', () => Serenity.StringEditor],
        ['Doc2', () => Serenity.StringEditor],
        ['Doc3', () => Serenity.StringEditor],
        ['Doc4', () => Serenity.StringEditor],
        ['DocImageMap', () => Serenity.StringEditor],
        ['Remark1', () => Serenity.StringEditor],
        ['Remark2', () => Serenity.StringEditor],
        ['Remark3', () => Serenity.StringEditor],
        ['Remark4', () => Serenity.StringEditor],
        ['RemarkDate1', () => Serenity.DateEditor],
        ['RemarkDate2', () => Serenity.DateEditor],
        ['RemarkDate3', () => Serenity.DateEditor],
        ['RefId', () => Serenity.IntegerEditor],
        ['Status', () => Serenity.StringEditor],
        ['WorkflowStage', () => Serenity.StringEditor],
        ['WorkflowStagename', () => Serenity.StringEditor],
        ['AssignTo', () => Serenity.StringEditor],
        ['Doc5', () => Serenity.StringEditor],
        ['Doc6', () => Serenity.StringEditor],
        ['Doc7', () => Serenity.StringEditor],
        ['Doc8', () => Serenity.StringEditor],
        ['CreatedDate', () => Serenity.DateEditor],
        ['LastUpdate', () => Serenity.DateEditor],
        ['DocImageMapKey', () => Serenity.StringEditor],
        ['WorkOrderLocation', () => Serenity.StringEditor],
        ['WorkorderCity', () => Serenity.StringEditor],
        ['WorkorderZone', () => Serenity.StringEditor],
        ['WorkorderArea', () => Serenity.StringEditor],
        ['WorkorderRoad', () => Serenity.StringEditor],
        ['WorkorderSection', () => Serenity.StringEditor],
        ['DocOther2', () => Serenity.StringEditor],
        ['DocOther1', () => Serenity.StringEditor],
        ['YearsOfLife', () => Serenity.IntegerEditor],
        ['WarrantyStartDate', () => Serenity.DateEditor],
        ['WarrantyEndDate', () => Serenity.DateEditor],
        ['WorkorderLane', () => Serenity.StringEditor],
        ['BlockDate', () => Serenity.DateEditor],
        ['AutoSkip', () => Serenity.BooleanEditor],
        ['SeqN', () => Serenity.StringEditor],
        ['Emergency', () => Serenity.IntegerEditor],
        ['StatusCode', () => Serenity.StringEditor],
        ['DepId', () => Serenity.StringEditor],
        ['DisplayStreet', () => Serenity.StringEditor],
        ['DisplayZone', () => Serenity.StringEditor],
        ['DisplayArea', () => Serenity.StringEditor],
        ['DisplayCity', () => Serenity.StringEditor],
        ['DisplaySection', () => Serenity.StringEditor],
        ['UserGroup', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(WorkOrderOldForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}