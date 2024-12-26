
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ImportWizerdByEqFiles")]
    [BasedOnRow(typeof(Entities.ImportWizerdByEqFilesRow), CheckNames = true)]
    public class ImportWizerdByEqFilesColumns
    {

        [EditLink]
        public Int64 ImportId { get; set; }
        [EditLink]
        public String FileName { get; set; }
        public String ImportType { get; set; }
        public DateTime ImportDate { get; set; }
        public String ImportRef { get; set; }
       
        public String Status { get; set; }
        public String StatusMessage { get; set; }
        public DateTime SurvayDate { get; set; }
     
    }
}