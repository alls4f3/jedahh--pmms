
namespace PMMS.EAM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EAM.AssetCustAttr")]
    [BasedOnRow(typeof(Entities.AssetCustAttrRow), CheckNames = true)]
    public class AssetCustAttrColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int64 ItemSubId { get; set; }
        ////public Int64 AssetId { get; set; }
        //[EditLink]

        //public Int32 AttrId { get; set; }
        [EditLink]
        public String AttrValue { get; set; }
        [EditLink]

        public String AttrName { get; set; }

    }
}