﻿
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetSubCategoryLevel")]
    [BasedOnRow(typeof(Entities.AssetSubCategoryLevelRow), CheckNames = true)]
    public class AssetSubCategoryLevelForm
    {
        public String ItemName { get; set; }
        public Int32 ParentId { get; set; }
    }
}