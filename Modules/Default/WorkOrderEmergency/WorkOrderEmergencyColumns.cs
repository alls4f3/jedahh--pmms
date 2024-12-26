
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.WorkOrderEmergency")]
    [BasedOnRow(typeof(Entities.WorkOrderEmergencyRow), CheckNames = true)]
    public class WorkOrderEmergencyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EId { get; set; }
        [EditLink]
        public String Ename { get; set; }
    }
}