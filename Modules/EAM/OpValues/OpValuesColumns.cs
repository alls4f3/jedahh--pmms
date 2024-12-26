
namespace PMMS.EAM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("EAM.OpValues")]
    [BasedOnRow(typeof(Entities.OpValuesRow), CheckNames = true)]
    public class OpValuesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String OpValues { get; set; }
    }
}