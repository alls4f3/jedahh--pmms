
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using PMMS.Northwind;

    [FormScript("Default.WorkorderBoqItem")]
    [BasedOnRow(typeof(Entities.WorkorderBoqItemRow), CheckNames = true)]
    public class WorkorderBoqItemForm
    {

        [Tab("Quantities")]

        [Category("Items Quantities")]
        [HideOnUpdate]
        public String ItemDescTemplate { get; set; }
        
        [ReadOnly(true),Required]
        public String ItmDesc { get; set; }
        [ReadOnly(true)]

        public String ItmCode { get; set; }
        [ReadOnly(true)]

        public Double ItmSeq { get; set; }
        [ReadOnly(true)]

        //public Double ContractId { get; set; }
        public String Unit { get; set; }
        [ReadOnly(true)]

        public Double Qty { get; set; }
        [ReadOnly(true)]
        public Double Prev_EXEC_QTY { get; set; }
        [ReadOnly(true)]
        public Double REMAINDER { get; set; }

        //public Int64 Woid { get; set; }
        [UpdatePermission(PermissionKeys.Apps.WorkflowPlannedQty)]
        [InsertPermission(PermissionKeys.Apps.WorkflowPlannedQty)]

        public Double Planned_QTY { get; set; }

        [UpdatePermission(PermissionKeys.Apps.WorkflowExtQty)]
        [InsertPermission(PermissionKeys.Apps.WorkflowExtQty)]

        //[Required]
        public Double ExecQty { get; set; }


        public String InvoiceNumber { get; set; }


        [Category("Planing")]

        public DateTime InvoiceStartDate { get; set; }
        public DateTime InvoiceEndDate { get; set; }
        public DateTime RealInvoiceStartDate { get; set; }
        public DateTime RealInvoiceEndDate { get; set; }
        public int? ItemStatus { get; set; }
        [Category("Execution instruction")]
        [TextAreaEditor(Cols = 1, Rows = 3)]

        public String Comment { get; set; }
        public bool? IsApproved { get; set; }

        [Tab("Quality Assurance")]
        [Category("Quality assurance review")]
        [TextAreaEditor(Cols = 1, Rows = 3)]

        public String QaComment { get; set; }
        public bool? QaApproved { get; set; }


    }
}