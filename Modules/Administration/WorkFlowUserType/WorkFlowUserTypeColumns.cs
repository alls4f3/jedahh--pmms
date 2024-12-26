
namespace PMMS.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.WorkFlowUserType")]
    [BasedOnRow(typeof(Entities.WorkFlowUserTypeRow), CheckNames = true)]
    public class WorkFlowUserTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserTypeId { get; set; }
        [EditLink]
        public String UserTypeName { get; set; }
        public Int32 AssignType { get; set; }
    }
}