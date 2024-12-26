
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Zone")]
    [BasedOnRow(typeof(Entities.ZoneRow), CheckNames = true)]
    public class ZoneColumns
    {
        public Decimal ZoneNo { get; set; }
        [EditLink]
        public String ZoneName { get; set; }
        public String CityName { get; set; }
        public Decimal CityNo { get; set; }
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ItemId { get; set; }
    }
}