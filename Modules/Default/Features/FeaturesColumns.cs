
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Features")]
    [BasedOnRow(typeof(Entities.FeaturesRow), CheckNames = true)]
    public class FeaturesColumns
    {
        [EditLink]
        public String FeatureNo { get; set; }
        public String FeatureShortName { get; set; }
        public String FeatureDescription { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemId { get; set; }
    }
}