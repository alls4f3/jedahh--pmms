using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PMMS.Northwind
{
    public partial class EmployeeFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PMMS.Northwind.EmployeeFormatter";

        public EmployeeFormatterAttribute()
            : base(Key)
        {
        }

        public String GenderProperty
        {
            get { return GetOption<String>("genderProperty"); }
            set { SetOption("genderProperty", value); }
        }


        public String Gender2Property
        {
            get { return GetOption<String>("gender2Property"); }
            set { SetOption("gender2Property", value); }
        }

        public String TransferStatusProperty
        {
            get { return GetOption<String>("TransferStatusProperty"); }
            set { SetOption("TransferStatusProperty", value); }
        }
    }
}

