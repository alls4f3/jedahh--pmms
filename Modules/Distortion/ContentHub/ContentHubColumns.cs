
namespace PMMS.Distortion.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Distortion.ContentHub")]
    [BasedOnRow(typeof(Entities.ContentHubRow), CheckNames = true)]
    public class ContentHubColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ImgColId { get; set; }
        [EditLink]
        public String ImgColNote { get; set; }
        public String ImageColPath { get; set; }
        public String ImageLat { get; set; }
        public String ImageLong { get; set; }
        public Int32 CollCateegory { get; set; }
    }
}