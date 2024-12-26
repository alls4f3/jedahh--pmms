
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetsSurveyDistress")]
    [BasedOnRow(typeof(Entities.AssetsSurveyDistressRow), CheckNames = true)]
    public class AssetsSurveyDistressForm
    {
        public Int32 DistressId { get; set; }
        public String Severity { get; set; }
        public Double Quantity { get; set; }
        public String Density { get; set; }
        public Double TotalValue { get; set; }
        //public Int64 Itemsuidref { get; set; }
    }
}