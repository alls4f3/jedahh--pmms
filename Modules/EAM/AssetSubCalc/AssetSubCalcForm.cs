
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetSubCalc")]
    [BasedOnRow(typeof(Entities.AssetSubCalcRow), CheckNames = true)]
    public class AssetSubCalcForm
    {
        public String Sid { get; set; }
        public Int32 DisId { get; set; }
        public String Density { get; set; }
        public String TotalValue { get; set; }
        public String Notes { get; set; }

        
    }
}