
namespace PMMS.BI.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BI.CustomDashboardsScripts")]
    [BasedOnRow(typeof(Entities.CustomDashboardsScriptsRow), CheckNames = true)]
    public class CustomDashboardsScriptsForm
    {
        //public Int32 PageId { get; set; }
        public String ScriptName { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 4)]
        public String ScriptApi { get; set; }
    }
}