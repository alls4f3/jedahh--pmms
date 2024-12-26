
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Department")]
    [BasedOnRow(typeof(Entities.DepartmentRow), CheckNames = true)]
    public class DepartmentForm
    {
        public String DepartmentName { get; set; }
    }
}