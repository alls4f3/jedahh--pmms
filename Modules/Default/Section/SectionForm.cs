
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Section")]
    [BasedOnRow(typeof(Entities.SectionRow), CheckNames = true)]
    public class SectionForm
    {
       
        public String SectionNo { get; set; }
      
        public bool IsActive { get; set; }

    }
}