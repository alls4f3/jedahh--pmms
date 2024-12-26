using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PMMS.Northwind
{
    public partial class OrderVisitsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PMMS.Northwind.OrderVisitsEditor";

        public OrderVisitsEditorAttribute()
            : base(Key)
        {
        }
    }
}

