
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("EAM.AssetClass")]
    [BasedOnRow(typeof(Entities.AssetClassRow), CheckNames = true)]
    public class AssetClassForm
    {

        
        public String ItemName { get; set; }
        public Int32? ParentId { get; set; }
    }
}