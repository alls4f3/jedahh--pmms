
namespace PMMS.EAM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EAM.AssetTags")]
    [BasedOnRow(typeof(Entities.AssetTagsRow), CheckNames = true)]
    public class AssetTagsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemId { get; set; }
        [EditLink]
        public String ItemName { get; set; }
    }
}