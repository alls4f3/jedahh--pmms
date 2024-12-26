
namespace PMMS.EAM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using PMMS.Northwind;

    [FormScript("EAM.AssetsSurvey")]
    [BasedOnRow(typeof(Entities.AssetsSurveyRow), CheckNames = true)]
    public class AssetsSurveyForm
    {

        [Category("Survey Information")]

        public Int64 AssetsId { get; set; }
        public DateTime SurvayDate { get; set; }
        //public String SurvayDec { get; set; }
        //public String SurvayBy { get; set; }
        public String SurvayResult { get; set; }
        public Int32 SurvayRank { get; set; }
        //public Int16 SurvayNumber { get; set; }
      
        [Category("Attachments")]

        public String Attachments { get; set; }
        [AssetsSurveyDistressEditor]

        public List<Entities.AssetsSurveyDistressRow> AssetsSurveyDistress { get; set; }

    }
}