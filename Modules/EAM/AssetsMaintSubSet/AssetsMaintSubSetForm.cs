
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetsMaintSubSet")]
    [BasedOnRow(typeof(Entities.AssetsMaintSubSetRow), CheckNames = true)]
    public class AssetsMaintSubSetForm
    {
        public String ItemName { get; set; }
    }
}