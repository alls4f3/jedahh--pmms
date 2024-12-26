
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Section")]
    [BasedOnRow(typeof(Entities.SectionRow), CheckNames = true)]
    public class SectionColumns
    {
        [EditLink]
        public String RoadNo { get; set; }
        public Decimal AreaNo { get; set; }
        public String CityNo { get; set; }
        public String ZoneNo { get; set; }
        public String SectionNo { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ItemId { get; set; }
        public String SecName { get; set; }
        public bool? IsActive { get; set; }

        
    }
}