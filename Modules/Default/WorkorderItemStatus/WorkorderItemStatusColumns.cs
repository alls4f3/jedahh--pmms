
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.WorkorderItemStatus")]
    [BasedOnRow(typeof(Entities.WorkorderItemStatusRow), CheckNames = true)]
    public class WorkorderItemStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemId { get; set; }
        [EditLink]
        public String ItemName { get; set; }
        public Boolean IsClosed { get; set; }
    }
}