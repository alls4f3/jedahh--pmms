
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.WorkOrder")]
    [BasedOnRow(typeof(Entities.WorkOrderRow), CheckNames = true)]
    public class WorkOrderColumns
    {

   

   


        [EditLink, DisplayName("Serial")]
        public Int32 WorkOrderId { get; set; }
        //[EditLink]
        //public String ProjectName { get; set; }
        //public String ContractName { get; set; }
        //public String ProjectLocation { get; set; }
        [EditLink]
        public String Project { get; set; }
        [EditLink]

        public int? ProjectStart { get; set; }


        public String Contractor { get; set; }

        public String DepartmentName { get; set; }

        public DateTime DateOfOrderWork { get; set; }

        //public String WorkDuration { get; set; }
        //public DateTime WorkorderStartDate { get; set; }
        public DateTime WorkorderEndDate { get; set; }
        public DateTime WorkorderRenewDate { get; set; }

        public String Status { get; set; }
        public String workflowStagename { get; set; }

        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SeqN { get; set; }
        public bool? IsLicReq { get; set; }
        public bool? SkipStreet { get; set; }

        
        public String DisplayStreet { get; set; }
        public String DisplayZone { get; set; }
        public String DisplayArea { get; set; }
        public String DisplayCity { get; set; }
        public String DisplaySection { get; set; }




  
        //public String WorkorderNotes { get; set; }
        //public String Doc1 { get; set; }
        //public String Doc2 { get; set; }
        //public String Doc3 { get; set; }
        //public String Doc4 { get; set; }
        //public String DocImageMap { get; set; }
        //public String Remark1 { get; set; }
        //public String Remark2 { get; set; }
        //public String Remark3 { get; set; }
        //public String Remark4 { get; set; }
        //public DateTime RemarkDate1 { get; set; }
        //public DateTime RemarkDate2 { get; set; }
        //public DateTime RemarkDate3 { get; set; }
    }
}