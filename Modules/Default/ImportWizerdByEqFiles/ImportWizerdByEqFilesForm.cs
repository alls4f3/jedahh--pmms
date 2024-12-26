
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ImportWizerdByEqFiles")]
    [BasedOnRow(typeof(Entities.ImportWizerdByEqFilesRow), CheckNames = true)]
    public class ImportWizerdByEqFilesForm
    {
        
        public String ImportType { get; set; }
     
        public DateTime SurvayDate { get; set; }
   
        public String ImportUrl { get; set; }
    }
}