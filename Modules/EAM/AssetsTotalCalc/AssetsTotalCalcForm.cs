
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetsTotalCalc")]
    [BasedOnRow(typeof(Entities.AssetsTotalCalcRow), CheckNames = true)]
    public class AssetsTotalCalcForm
    {
        public String ItemName2 { get; set; }
        public String ItemOp { get; set; }
        //public Double ItemValue { get; set; }
        public Int32 ItemThen { get; set; }
    }
}