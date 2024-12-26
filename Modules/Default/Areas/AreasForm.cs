
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Areas")]
    [BasedOnRow(typeof(Entities.AreasRow), CheckNames = true)]
    public class AreasForm
    {
        public String AreaName { get; set; }
        public Decimal AreaNo { get; set; }
        public Decimal CityNo { get; set; }
        public Decimal ZoneNo { get; set; }
    }
}