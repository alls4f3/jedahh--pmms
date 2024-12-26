
namespace PMMS.EAM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EAM.AssetsSurvey")]
    [BasedOnRow(typeof(Entities.AssetsSurveyRow), CheckNames = true)]
    public class AssetsSurveyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Itemsuid { get; set; }
        public Int64 AssetsId { get; set; }
        public DateTime SurvayDate { get; set; }
        [EditLink]
        public String SurvayDec { get; set; }
        public String SurvayBy { get; set; }
        public String SurvayResult { get; set; }
        public Int32 SurvayRank { get; set; }
        public Int16 SurvayNumber { get; set; }
    }
}