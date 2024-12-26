
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetLocation")]
    [BasedOnRow(typeof(Entities.AssetLocationRow), CheckNames = true)]
    public class AssetLocationForm
    {
        public String ItemName { get; set; }
    }
}