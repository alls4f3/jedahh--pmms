
namespace PMMS.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.CustomReports")]
    [BasedOnRow(typeof(Entities.CustomReportsRow), CheckNames = true)]
    public class CustomReportsForm
    {
        [Tab("Information")]
        public String ReportName { get; set; }
        public String ReportPath { get; set; }
        public bool isExcel { get; set; }


        [TextAreaEditor(Cols = 1, Rows = 4)]
        public String sqltxt { get; set; }

    [Tab("Security")]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.UserLook), Multiple = true, Delimited = true)]

        public String ReportUsers { get; set; }
        [LookupEditor(typeof(PMMS.Northwind.Lookups.GroupsLook), Multiple = true, Delimited = true)]

        public String ReportGroups { get; set; }


    }
}