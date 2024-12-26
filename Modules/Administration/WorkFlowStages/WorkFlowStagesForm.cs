
namespace PMMS.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.WorkFlowStages")]
    [BasedOnRow(typeof(Entities.WorkFlowStagesRow), CheckNames = true)]
    public class WorkFlowStagesForm
    {
        public String StageName { get; set; }
        public Int32 StageKey { get; set; }


        public Int32 OnApproveGo { get; set; }
        public Int32 OnRejectGo { get; set; }
        public Int32 UserType { get; set; }


        public bool IsRequiredCheckHF { get; set; }
        public bool IsRequiredToBlockHF { get; set; }

    }
}