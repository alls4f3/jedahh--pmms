
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetSubCategory")]
    [BasedOnRow(typeof(Entities.AssetSubCategoryRow), CheckNames = true)]
    public class AssetSubCategoryForm
    {
        public String ItemName { get; set; }

        public Int32 ParentId { get; set; }
    }
}