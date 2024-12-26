
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.WorkOrderBug")]
    [BasedOnRow(typeof(Entities.WorkOrderBugRow), CheckNames = true)]
    public class WorkOrderBugColumns
    {
        
        [EditLink]
        public String ItemBugName { get; set; }
        public String EqNumber { get; set; }
        public String Notes { get; set; }

    }
}