
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ImportWizerd")]
    [BasedOnRow(typeof(Entities.ImportWizerdRow), CheckNames = true)]
    public class ImportWizerdColumns
    {
        [EditLink]
        public String FileName { get; set; }
        public String ImportType { get; set; }
        public String ImportDate { get; set; }
        public String ImportRef { get; set; }
        public String ImportBy { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ImportId { get; set; }
        public String ContentUrl { get; set; }
    }
}