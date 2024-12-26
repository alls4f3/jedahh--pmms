
namespace PMMS.EAM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EAM.AssetsSeverity")]
    [BasedOnRow(typeof(Entities.AssetsSeverityRow), CheckNames = true)]
    public class AssetsSeverityColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String SCode { get; set; }
        public String SName { get; set; }
    }
}