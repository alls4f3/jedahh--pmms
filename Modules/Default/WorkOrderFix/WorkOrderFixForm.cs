
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.WorkOrderFix")]
    [BasedOnRow(typeof(Entities.WorkOrderFixRow), CheckNames = true)]
    public class WorkOrderFixForm
    {
        public String ItemFixName { get; set; }
     
        public String Notes { get; set; }
        //public Int32 WorkOrderId { get; set; }
    }
}