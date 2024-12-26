
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.WorkorderBoqItem")]
    [BasedOnRow(typeof(Entities.WorkorderBoqItemRow), CheckNames = true)]
    public class WorkorderBoqItemColumns
    {
   
        [EditLink]
        public String ItmDesc { get; set; }
        [EditLink]
        public String ItmCode { get; set; }
        //public Double ItmSeq { get; set; }
       
        //public Double ContractId { get; set; }
        public String Unit { get; set; }
        public Double Qty { get; set; }
        public Double Prev_EXEC_QTY { get; set; }
        public Double REMAINDER { get; set; }
        //public Int64 Woid { get; set; }
        [EditLink]

        public Double ExecQty { get; set; }
        public Double Planned_QTY { get; set; }


        //public DateTime InvoiceStartDate { get; set; }
        //public DateTime InvoiceEndDate { get; set; }
        //public DateTime RealInvoiceStartDate { get; set; }
        //public DateTime RealInvoiceEndDate { get; set; }

        public String Status { get; set; }
        public String Comment { get; set; }

        
    }
}