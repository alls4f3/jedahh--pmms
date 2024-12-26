
namespace PMMS.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.AuditLog")]
    [BasedOnRow(typeof(Entities.AuditLogRow), CheckNames = true)]
    public class AuditLogColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public Int32 UserId { get; set; }
        [EditLink]
        public String UserName { get; set; }
        public String Action { get; set; }
        public DateTime ChangedOn { get; set; }
      
        public Int32 RowId { get; set; }
        public String Module { get; set; }
        public String Page { get; set; }
        public String Changes { get; set; }
    }
}