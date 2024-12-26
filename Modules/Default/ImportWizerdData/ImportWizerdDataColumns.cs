
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ImportWizerdData")]
    [BasedOnRow(typeof(Entities.ImportWizerdDataRow), CheckNames = true)]
    public class ImportWizerdDataColumns
    {
        [EditLink]
        public String FileName { get; set; }
        //public String StatusMessage { get; set; }

        public String Status { get; set; }

        public String SurvayDate { get; set; }
        public String DisplayStreet { get; set; }
        public String DisplayArea { get; set; }
        public String DisplayCity { get; set; }
        public String DisplaySection { get; set; }
        public String DisplayStreetName { get; set; }
        public String DisplayLane { get; set; }





        //public String TypeName { get; set; }
        public DateTime ImportDate { get; set; }
        public String ImportRef { get; set; }

        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ImportId { get; set; }

    }
}