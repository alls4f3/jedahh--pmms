
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.FixList")]
    [BasedOnRow(typeof(Entities.FixListRow), CheckNames = true)]
    public class FixListForm
    {
        public string ItemName { get; set; }
    }
}