
namespace PMMS.EAM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EAM.AssetSubCalc")]
    [BasedOnRow(typeof(Entities.AssetSubCalcRow), CheckNames = true)]
    public class AssetSubCalcColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemId { get; set; }
        [EditLink]
        public String Sid { get; set; }
        public Int32 DisId { get; set; }
        public String Density { get; set; }
        public String TotalValue { get; set; }
    }
}