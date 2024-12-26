
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetStatus")]
    [BasedOnRow(typeof(Entities.AssetStatusRow), CheckNames = true)]
    public class AssetStatusForm
    {
        public String ItemName { get; set; }
    }
}