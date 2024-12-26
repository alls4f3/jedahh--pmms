
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetsMaintCondation")]
    [BasedOnRow(typeof(Entities.AssetsMaintCondationRow), CheckNames = true)]
    public class AssetsMaintCondationForm
    {
        public String ItemName { get; set; }
    }
}