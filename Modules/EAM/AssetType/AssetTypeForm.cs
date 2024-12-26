
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetType")]
    [BasedOnRow(typeof(Entities.AssetTypeRow), CheckNames = true)]
    public class AssetTypeForm
    {
        public String ItemName { get; set; }
    }
}