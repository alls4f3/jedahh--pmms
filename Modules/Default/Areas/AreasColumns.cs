
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Areas")]
    [BasedOnRow(typeof(Entities.AreasRow), CheckNames = true)]
    public class AreasColumns
    {

        public Decimal AreaNo { get; set; }
        [EditLink]
        public String AreaName { get; set; }
        public Decimal ZoneNo { get; set; }
        public Decimal CityNo { get; set; }
        public String CityName { get; set; }
        public String ZoneName { get; set; }


        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ItemId { get; set; }
    }
}