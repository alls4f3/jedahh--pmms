
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Sections")]
    [BasedOnRow(typeof(Entities.SectionsRow), CheckNames = true)]
    public class SectionsForm
    {
        public Decimal RoadNo { get; set; }
        public Decimal AreaNo { get; set; }
        public Decimal CityNo { get; set; }
        public Decimal ZoneNo { get; set; }
        public Decimal SectionNo { get; set; }
    }
}