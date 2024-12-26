
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetAttr")]
    [BasedOnRow(typeof(Entities.AssetAttrRow), CheckNames = true)]
    public class AssetAttrForm
    {
        public String ItemName { get; set; }
    }
}