
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Zones")]
    [BasedOnRow(typeof(Entities.ZonesRow), CheckNames = true)]
    public class ZonesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Decimal ZoneNo { get; set; }
        [EditLink]
        public String ZoneName { get; set; }
        public Decimal CityNo { get; set; }
    }
}