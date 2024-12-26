
namespace PMMS.BI.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BI.CustomDashboards")]
    [BasedOnRow(typeof(Entities.CustomDashboardsRow), CheckNames = true)]
    public class CustomDashboardsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PageId { get; set; }
        [EditLink]
        public String PageName { get; set; }
        public String PagePath { get; set; }
        public String PageUsers { get; set; }
        public String PageGroups { get; set; }

        public String FolderName { get; set; }

    }
}