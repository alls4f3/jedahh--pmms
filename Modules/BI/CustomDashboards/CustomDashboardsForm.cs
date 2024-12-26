
namespace PMMS.BI.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using PMMS.Northwind;

    [FormScript("BI.CustomDashboards")]
    [BasedOnRow(typeof(Entities.CustomDashboardsRow), CheckNames = true)]
    public class CustomDashboardsForm
    {

        [Tab("Page Content")]

        public String PageName { get; set; }
        public String PagePath { get; set; }


        public String FolderName { get; set; }


       

        [CustomDashboardsScriptsEditor]
        [DisplayName("API Scripts")]

        public List<Entities.CustomDashboardsScriptsRow> CustomDashboardsScripts { get; set; }



        [Tab("Page Security")]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.UserLook), Multiple = true, Delimited = true)]

        public String PageUsers { get; set; }
        [LookupEditor(typeof(PMMS.Northwind.Lookups.GroupsLook), Multiple = true, Delimited = true)]

        public String PageGroups { get; set; }
    }
}