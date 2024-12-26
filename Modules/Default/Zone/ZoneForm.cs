
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Zone")]
    [BasedOnRow(typeof(Entities.ZoneRow), CheckNames = true)]
    public class ZoneForm
    {
        public Decimal ZoneNo { get; set; }
        public String ZoneName { get; set; }
        public Decimal CityNo { get; set; }
    }
}