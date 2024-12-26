
namespace PMMS.EAM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EAM.AssetsTotalCalc")]
    [BasedOnRow(typeof(Entities.AssetsTotalCalcRow), CheckNames = true)]
    public class AssetsTotalCalcColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemId { get; set; }
        [EditLink]
        public String ItemName { get; set; }
        public String ItemOp { get; set; }
     
        public String AssetStatusName { get; set; }
    }
}