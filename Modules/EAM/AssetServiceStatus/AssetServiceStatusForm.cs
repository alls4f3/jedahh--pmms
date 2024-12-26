
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetServiceStatus")]
    [BasedOnRow(typeof(Entities.AssetServiceStatusRow), CheckNames = true)]
    public class AssetServiceStatusForm
    {
        public String ItemName { get; set; }
    }
}