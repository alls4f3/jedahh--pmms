
namespace PMMS.Distortion.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Distortion.DistortionCategory")]
    [BasedOnRow(typeof(Entities.DistortionCategoryRow), CheckNames = true)]
    public class DistortionCategoryForm
    {
        public String ItemName { get; set; }
    }
}