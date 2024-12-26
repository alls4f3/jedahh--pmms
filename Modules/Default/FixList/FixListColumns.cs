
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.FixList")]
    [BasedOnRow(typeof(Entities.FixListRow), CheckNames = true)]
    public class FixListColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String ItemName { get; set; }
    }
}