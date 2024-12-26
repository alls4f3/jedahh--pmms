
namespace PMMS.Distortion.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Distortion.DistortionSubCategory")]
    [BasedOnRow(typeof(Entities.DistortionSubCategoryRow), CheckNames = true)]
    public class DistortionSubCategoryForm
    {
        public String ItemName { get; set; }
        public Int32 ParentId { get; set; }
    }
}