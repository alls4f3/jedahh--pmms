
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Features")]
    [BasedOnRow(typeof(Entities.FeaturesRow), CheckNames = true)]
    public class FeaturesForm
    {
        public String FeatureNo { get; set; }
        public String FeatureShortName { get; set; }
        public String FeatureDescription { get; set; }
    }
}