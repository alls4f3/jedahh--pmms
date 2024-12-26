
namespace PMMS.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.AuditLog")]
    [BasedOnRow(typeof(Entities.AuditLogRow), CheckNames = false)]
    public class AuditLogForm
    {
        public Int32 UserId { get; set; }
        public String UserName { get; set; }
        public String Action { get; set; }
        public DateTime ChangedOn { get; set; }
        //public String TableName { get; set; }
        public Int32 RowId { get; set; }
        public String Module { get; set; }
        public String Page { get; set; }
        public String Changes { get; set; }
    }
}