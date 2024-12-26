
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetBuilding")]
    [BasedOnRow(typeof(Entities.AssetBuildingRow), CheckNames = true)]
    public class AssetBuildingForm
    {
        public String ItemName { get; set; }

        public String ItemSerial { get; set; }

        public Int32 CityId { get; set; }
        public String ItemDesc { get; set; }
        public Double NumberOfFloor { get; set; }
        public String LatLong { get; set; }

    }
}