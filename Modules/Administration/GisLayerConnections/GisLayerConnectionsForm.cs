
namespace PMMS.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.GisLayerConnections")]
    [BasedOnRow(typeof(Entities.GisLayerConnectionsRow), CheckNames = true)]
    public class GisLayerConnectionsForm
    {

        [Tab("Information")]
        public String GisurlName { get; set; }

        public String GisPageName { get; set; }
        public String GisPageContent { get; set; }
        //public Int32 GisPageSorting { get; set; }
        public Boolean IsPublish { get; set; }

        public String FolderName { get; set; }


        [Tab("Security")]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.UserLook), Multiple = true, Delimited = true)]

        public String ReportUsers { get; set; }
        //[LookupEditor(typeof(PMMS.Northwind.Lookups.GroupsLook), Multiple = true, Delimited = true)]

        //public String ReportGroups { get; set; }


    }
}