
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.WorkOrderEmergency")]
    [BasedOnRow(typeof(Entities.WorkOrderEmergencyRow), CheckNames = true)]
    public class WorkOrderEmergencyForm
    {
        public String Ename { get; set; }
    }
}