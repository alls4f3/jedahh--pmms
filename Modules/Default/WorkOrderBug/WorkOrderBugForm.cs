
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.WorkOrderBug")]
    [BasedOnRow(typeof(Entities.WorkOrderBugRow), CheckNames = true)]
    public class WorkOrderBugForm
    {
        public String ItemBugName { get; set; }

        public String EqNumber { get; set; }
        public String Notes { get; set; }
    }
}