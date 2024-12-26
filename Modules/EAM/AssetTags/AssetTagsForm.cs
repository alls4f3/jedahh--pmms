
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetTags")]
    [BasedOnRow(typeof(Entities.AssetTagsRow), CheckNames = true)]
    public class AssetTagsForm
    {
        public String ItemName { get; set; }
    }
}