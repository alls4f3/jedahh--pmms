
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ImportWizerd")]
    [BasedOnRow(typeof(Entities.ImportWizerdRow), CheckNames = true)]
    public class ImportWizerdForm
    {
        public String FileName { get; set; }
        public String ImportType { get; set; }
        public String ImportDate { get; set; }
        public String ImportRef { get; set; }
        public String ImportBy { get; set; }
        public String ContentUrl { get; set; }
    }
}