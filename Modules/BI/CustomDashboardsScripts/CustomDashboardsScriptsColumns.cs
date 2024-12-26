
namespace PMMS.BI.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BI.CustomDashboardsScripts")]
    [BasedOnRow(typeof(Entities.CustomDashboardsScriptsRow), CheckNames = true)]
    public class CustomDashboardsScriptsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ScriptId { get; set; }
        //public Int32 PageId { get; set; }
        [EditLink]
        public String ScriptName { get; set; }
        public String ScriptApi { get; set; }
    }
}