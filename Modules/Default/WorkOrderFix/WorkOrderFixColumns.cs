
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.WorkOrderFix")]
    [BasedOnRow(typeof(Entities.WorkOrderFixRow), CheckNames = true)]
    public class WorkOrderFixColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ItemFixId { get; set; }
        [EditLink]
        public String ItemFixName { get; set; }
        //public Int32 WorkOrderId { get; set; }

   
        public String Notes { get; set; }
    }
}