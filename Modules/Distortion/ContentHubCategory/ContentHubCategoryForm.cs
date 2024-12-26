
namespace PMMS.Distortion.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Distortion.ContentHubCategory")]
    [BasedOnRow(typeof(Entities.ContentHubCategoryRow), CheckNames = true)]
    public class ContentHubCategoryForm
    {
        public String ItemName { get; set; }
    }
}