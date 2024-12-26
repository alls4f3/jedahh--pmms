using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PMMS.Modules.Reports
{
    public class WorkOrderRpt
    {
        public string WorkOrderId { get; set; }
        public string ProjectName { get; set; }
        public string ProjectLocation { get; set; }
        public string ContractName { get; set; }
        public string DateOfOrderWork { get; set; }
        public string WorkDuration { get; set; }
        public string WorkorderStartDate { get; set; }
        public string WorkorderEndDate { get; set; }
        public string WorkorderNotes { get; set; }
        public string WorkorderRenewDate { get; set; }
        public byte[] Doc1 { get; set; }
        public byte[] Doc2 { get; set; }

        public byte[] Doc3 { get; set; }
        public byte[] Doc4 { get; set; }
        public byte[] Doc5 { get; set; }
        public byte[] Doc6 { get; set; }
        public byte[] Doc7 { get; set; }
        public byte[] Doc8 { get; set; }
        public byte[] DocImageMap { get; set; }
        public byte[] DocImageMapSmall { get; set; }

        public string remark1 { get; set; }
        public string remark2 { get; set; }
        public string remark3 { get; set; }
        public string remark4 { get; set; }
        public string remarkDate1 { get; set; }
        public string remarkDate2 { get; set; }
        public string remarkDate3 { get; set; }

        public IEnumerable<workOrderfix> listItemfix { get; set; }
       public IEnumerable<workOrderBug> listItemBug { get; set; }
    }

    public class workOrderfix
    {
        public string ItemName { get; set; }
    }
    public class workOrderBug
    {
        public string ItemName { get; set; }
    }
}