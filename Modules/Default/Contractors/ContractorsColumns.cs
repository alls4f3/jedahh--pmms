
namespace PMMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Contractors")]
    [BasedOnRow(typeof(Entities.ContractorsRow), CheckNames = true)]
    public class ContractorsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Decimal ContractorNo { get; set; }
        [EditLink]
        public String CompanyName { get; set; }
        public String ContactName { get; set; }
        public String StreetAddress { get; set; }
        public String PostalCode { get; set; }
        public String City { get; set; }
        public String Email { get; set; }
        public String MobileNumber { get; set; }
        public String PhoneNumber { get; set; }
        public String FaxNumber { get; set; }
        public DateTime CreationDate { get; set; }
        public String Country { get; set; }
    }
}