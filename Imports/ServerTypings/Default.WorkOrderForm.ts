
namespace PMMS.Default {
    export class WorkOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Default.WorkOrder';
    }

    export interface WorkOrderForm {
        WorkOrderId: Serenity.IntegerEditor ;
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
        signature: Serenity.StringEditor;

        
        WorkorderSection: Serenity.StringEditor;
        WorkorderLane: Serenity.StringEditor;
        WorkorderArea: Serenity.StringEditor;
        WorkorderRoad: Serenity.StringEditor;
        WorkorderZone: Serenity.StringEditor;
        WorkorderCity: Serenity.StringEditor;
        RefId: Serenity.LookupEditor;
        emergency: Serenity.LookupEditor;
        WorkorderBoqItem: PMMS.Default.WorkorderBoqItemEditor;
        LaneTemplate: Serenity.StringEditor;

    

    }

    [,
        ['WorkOrderId', () => Serenity.IntegerEditor ],
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
        ['signature', () => Serenity.StringEditor],

        
        ['WorkorderSection', () => Serenity.StringEditor],
        ['WorkorderLane', () => Serenity.StringEditor],
        ['WorkorderArea', () => Serenity.StringEditor],
        ['WorkorderRoad', () => Serenity.StringEditor],
        ['WorkorderZone', () => Serenity.StringEditor],
        ['WorkorderCity', () => Serenity.StringEditor],
        ['RefId', () => Serenity.LookupEditor],
        ['emergency', () => Serenity.LookupEditor],
        ['WorkorderBoqItem', () => PMMS.Default.WorkorderBoqItemEditor],
        ['LaneTemplate', () => Serenity.StringEditor]

            
           
            
          
         

    ].forEach(x => Object.defineProperty(WorkOrderForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}