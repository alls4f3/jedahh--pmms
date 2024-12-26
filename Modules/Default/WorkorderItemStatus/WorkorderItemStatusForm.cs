
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.WorkorderItemStatus")]
    [BasedOnRow(typeof(Entities.WorkorderItemStatusRow), CheckNames = true)]
    public class WorkorderItemStatusForm
    {
        public String ItemName { get; set; }
        public Boolean IsClosed { get; set; }
    }
}