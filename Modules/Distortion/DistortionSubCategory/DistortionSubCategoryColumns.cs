
namespace PMMS.Distortion.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Distortion.DistortionSubCategory")]
    [BasedOnRow(typeof(Entities.DistortionSubCategoryRow), CheckNames = true)]
    public class DistortionSubCategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemId { get; set; }
        [EditLink]
        public String ItemName { get; set; }
        public Int32 ParentId { get; set; }
    }
}