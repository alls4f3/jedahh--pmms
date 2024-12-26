
namespace PMMS.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.CustomReports")]
    [BasedOnRow(typeof(Entities.CustomReportsRow), CheckNames = true)]
    public class CustomReportsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ReportId { get; set; }
        [EditLink]
        public String ReportName { get; set; }
   

        public bool isExcel { get; set; }

    }
}