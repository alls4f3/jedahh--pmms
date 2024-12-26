
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetCustAttr")]
    [BasedOnRow(typeof(Entities.AssetCustAttrRow), CheckNames = true)]
    public class AssetCustAttrForm
    {
        //public Int64 AssetId { get; set; }
        public Int32 AttrId { get; set; }
        public String AttrValue { get; set; }
    }
}