
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetDistress")]
    [BasedOnRow(typeof(Entities.AssetDistressRow), CheckNames = true)]
    public class AssetDistressForm
    {
        public String ItemName { get; set; }
    }
}