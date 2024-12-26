
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetsMaintCrit")]
    [BasedOnRow(typeof(Entities.AssetsMaintCritRow), CheckNames = true)]
    public class AssetsMaintCritForm
    {
        public String ItemName { get; set; }
    }
}