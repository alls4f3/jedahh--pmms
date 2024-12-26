
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetCategory")]
    [BasedOnRow(typeof(Entities.AssetCategoryRow), CheckNames = true)]
    public class AssetCategoryForm
    {
        public String ItemName { get; set; }
    }
}