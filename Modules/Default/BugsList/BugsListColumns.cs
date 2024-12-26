
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.BugsList")]
    [BasedOnRow(typeof(Entities.BugsListRow), CheckNames = true)]
    public class BugsListColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String ItemName { get; set; }
    }
}