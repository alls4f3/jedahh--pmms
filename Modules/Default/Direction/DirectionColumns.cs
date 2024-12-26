
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Direction")]
    [BasedOnRow(typeof(Entities.DirectionRow), CheckNames = true)]
    public class DirectionColumns
    {
        [EditLink]
        public String DirectionNo { get; set; }
        public String DirectionShortName { get; set; }
        public String DirectionDescription { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemId { get; set; }
    }
}