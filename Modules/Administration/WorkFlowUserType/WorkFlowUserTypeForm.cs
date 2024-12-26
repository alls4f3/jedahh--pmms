
namespace PMMS.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.WorkFlowUserType")]
    [BasedOnRow(typeof(Entities.WorkFlowUserTypeRow), CheckNames = true)]
    public class WorkFlowUserTypeForm
    {
        public String UserTypeName { get; set; }
        public Int32 AssignType { get; set; }
    }
}