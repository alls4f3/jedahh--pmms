
namespace PMMS.EAM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EAM.AssetBuilding")]
    [BasedOnRow(typeof(Entities.AssetBuildingRow), CheckNames = true)]
    public class AssetBuildingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemId { get; set; }
        [EditLink]
        public String ItemName { get; set; }
        public Int32 CityId { get; set; }
        public String ItemDesc { get; set; }
        public Double NumberOfFloor { get; set; }
        public String LatLong { get; set; }
    }
}