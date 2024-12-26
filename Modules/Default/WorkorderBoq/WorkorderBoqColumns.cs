
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.WorkorderBoq")]
    [BasedOnRow(typeof(Entities.WorkorderBoqRow), CheckNames = true)]
    public class WorkorderBoqColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemId { get; set; }
        [EditLink]
        public String ItmCode { get; set; }
        public Double ItmSeq { get; set; }
        public String ItmDesc { get; set; }
        public Double ContractId { get; set; }
        public String Unit { get; set; }
        public Double Qty { get; set; }
        public Double Remainder { get; set; }
        public Double ExecQty { get; set; }
    }
}