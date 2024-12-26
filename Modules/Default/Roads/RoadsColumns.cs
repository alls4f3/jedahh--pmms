
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Roads")]
    [BasedOnRow(typeof(Entities.RoadsRow), CheckNames = true)]
    public class RoadsColumns
    {
        public String RoadNo { get; set; }
        [EditLink]
        public String RoadName { get; set; }
        public String AreaNo { get; set; }
        public String RoadType { get; set; }
        public String CityNo { get; set; }
        public String ZoneNo { get; set; }
        public String CityName { get; set; }
        public String ZoneName { get; set; }
        public String AreaName { get; set; }
        public bool IsActive { get; set; }

        

        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ItemId { get; set; }
    }
}