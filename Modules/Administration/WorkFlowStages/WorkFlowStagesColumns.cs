
namespace PMMS.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.WorkFlowStages")]
    [BasedOnRow(typeof(Entities.WorkFlowStagesRow), CheckNames = true)]
    public class WorkFlowStagesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StageId { get; set; }
        [EditLink]
        public String StageName { get; set; }


        public Int32 StageKey { get; set; }
        public Int32 OnApproveGo { get; set; }
        public Int32 OnRejectGo { get; set; }
 
    }
}