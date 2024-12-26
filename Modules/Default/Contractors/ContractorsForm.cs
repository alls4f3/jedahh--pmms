
namespace PMMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Contractors")]
    [BasedOnRow(typeof(Entities.ContractorsRow), CheckNames = true)]
    public class ContractorsForm
    {

        [Tab("Basic Information")]
        [Category("Contractor Information")]
        public String CompanyName { get; set; }
        public String ContactName { get; set; }
        public String StreetAddress { get; set; }
        public String PostalCode { get; set; }
        public String City { get; set; }
        public String Email { get; set; }
        public String MobileNumber { get; set; }
        public String PhoneNumber { get; set; }
        public String FaxNumber { get; set; }
  
        public String Country { get; set; }

        [Tab("Users Management")]
        [Category("Users Mapping")]
        public int? ContractorUser { get; set; }
       
    }
}