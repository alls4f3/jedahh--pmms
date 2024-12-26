
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.BugsList")]
    [BasedOnRow(typeof(Entities.BugsListRow), CheckNames = true)]
    public class BugsListForm
    {
        public string ItemName { get; set; }

    }
}