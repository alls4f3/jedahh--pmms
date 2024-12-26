
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ImportWizerdData")]
    [BasedOnRow(typeof(Entities.ImportWizerdDataRow), CheckNames = true)]
    public class ImportWizerdDataForm
    {
        [Tab("Import Data")]
        [Category("Import Information")]
        public DateTime SurvayDate { get; set; }
        public int? GroupSurvey { get; set; }
      
        public String ContentUrl { get; set; }
        //public String ContentUrlFWD { get; set; }
        //public String ContentUrlIRI { get; set; }
        //public String ContentUrlSKID { get; set; }
        [ReadOnly(true)]
        public String StatusMessage { get; set; }

      

        [ReadOnly(true),HideOnInsert(true)]
        public String ImportRef { get; set; }


        [DisplayName("Status Message")]
        public String WorkflowHis { get; set; }
        //[Tab("Summary Report")]
        //[Category("Report Information")]





    }
}