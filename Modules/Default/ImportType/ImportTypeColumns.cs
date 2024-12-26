
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ImportType")]
    [BasedOnRow(typeof(Entities.ImportTypeRow), CheckNames = true)]
    public class ImportTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TypeId { get; set; }
        [EditLink]
        public String TypeName { get; set; }
    }
}