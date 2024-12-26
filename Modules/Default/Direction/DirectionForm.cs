
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Direction")]
    [BasedOnRow(typeof(Entities.DirectionRow), CheckNames = true)]
    public class DirectionForm
    {
        public String DirectionNo { get; set; }
        public String DirectionShortName { get; set; }
        public String DirectionDescription { get; set; }
    }
}