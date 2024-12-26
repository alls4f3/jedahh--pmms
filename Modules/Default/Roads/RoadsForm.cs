
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Roads")]
    [BasedOnRow(typeof(Entities.RoadsRow), CheckNames = true)]
    public class RoadsForm
    {
        public String RoadNo { get; set; }
        public String RoadName { get; set; }

        public bool? IsActive { get; set; }





    }
}