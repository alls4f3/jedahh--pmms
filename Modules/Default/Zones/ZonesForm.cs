
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Zones")]
    [BasedOnRow(typeof(Entities.ZonesRow), CheckNames = true)]
    public class ZonesForm
    {
        public String ZoneName { get; set; }
        public Decimal CityNo { get; set; }
    }
}