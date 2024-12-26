
namespace PMMS.EAM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EAM.AssetsSurveyDistress")]
    [BasedOnRow(typeof(Entities.AssetsSurveyDistressRow), CheckNames = true)]
    public class AssetsSurveyDistressColumns
    {
       
        //public Int64 Itemdisid { get; set; }
        [EditLink]

        public Int32 DistressId { get; set; }
        [EditLink]
        public String Severity { get; set; }
        public Double Quantity { get; set; }
        public String Density { get; set; }
        public Double TotalValue { get; set; }
        //public Int64 Itemsuidref { get; set; }
    }
}