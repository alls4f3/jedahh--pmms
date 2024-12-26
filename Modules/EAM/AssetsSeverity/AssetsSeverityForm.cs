
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetsSeverity")]
    [BasedOnRow(typeof(Entities.AssetsSeverityRow), CheckNames = true)]
    public class AssetsSeverityForm
    {
        public String SName { get; set; }
    }
}