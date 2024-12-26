
namespace PMMS.Default.Entities
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CONTRACTORS]")]
    [DisplayName("Contractors"), InstanceName("Contractors")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class ContractorsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Contractor No"), Column("CONTRACTOR_NO"), PrimaryKey,Identity]
        public int? ContractorNo
        {
            get { return Fields.ContractorNo[this]; }
            set { Fields.ContractorNo[this] = value; }
        }

        [DisplayName("Company Name"), Column("COMPANY_NAME"), NotNull, QuickSearch,Required]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Contact Name"), Column("CONTACT_NAME"), NotNull, Required]
        public String ContactName
        {
            get { return Fields.ContactName[this]; }
            set { Fields.ContactName[this] = value; }
        }

        [DisplayName("Street Address"), Column("STREET_ADDRESS")]
        public String StreetAddress
        {
            get { return Fields.StreetAddress[this]; }
            set { Fields.StreetAddress[this] = value; }
        }

        [DisplayName("Postal Code"), Column("POSTAL_CODE")]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("City"), Column("CITY")]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Email"), Column("EMAIL"), Required]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Mobile Number"), Column("MOBILE_NUMBER"), Required]
        public String MobileNumber
        {
            get { return Fields.MobileNumber[this]; }
            set { Fields.MobileNumber[this] = value; }
        }

        [DisplayName("Phone Number"), Column("PHONE_NUMBER"), Required]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("Fax Number"), Column("FAX_NUMBER")]
        public String FaxNumber
        {
            get { return Fields.FaxNumber[this]; }
            set { Fields.FaxNumber[this] = value; }
        }

        [DisplayName("Creation Date"), Column("CREATION_DATE")]
        public DateTime? CreationDate
        {
            get { return Fields.CreationDate[this]; }
            set { Fields.CreationDate[this] = value; }
        }

        [DisplayName("Country"), Column("COUNTRY")]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [LookupEditor(typeof(PMMS.Northwind.Lookups.UserLook))]
        [DisplayName("Contractor User")]
        public int? ContractorUser
        {
            get { return Fields.ContractorUser[this]; }
            set { Fields.ContractorUser[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return  Fields.ContractorNo; }
        }






        StringField INameRow.NameField
        {
            get { return Fields.CompanyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ContractorsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ContractorNo;
            public StringField CompanyName;
            public StringField ContactName;
            public StringField StreetAddress;
            public StringField PostalCode;
            public StringField City;
            public StringField Email;
            public StringField MobileNumber;
            public StringField PhoneNumber;
            public StringField FaxNumber;
            public DateTimeField CreationDate;
            public StringField Country;
            public Int32Field ContractorUser;

        }
    }
}
