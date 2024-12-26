
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetDimansion")]
    [BasedOnRow(typeof(Entities.AssetDimansionRow), CheckNames = true)]
    public class AssetDimansionForm
    {
        public String ItemName { get; set; }
    }
}