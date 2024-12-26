
namespace PMMS.EAM.Entities
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("EAM"), TableName("[dbo].[AssetsSeverity]")]
    [DisplayName("Assets Severity"), InstanceName("Assets Severity")]
    [ReadPermission(PermissionKeys.Apps.Assets)]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class AssetsSeverityRow : Row, IIdRow, INameRow
    {
        [DisplayName("S Code"), Size(50), PrimaryKey, QuickSearch]
        public String SCode
        {
            get { return Fields.SCode[this]; }
            set { Fields.SCode[this] = value; }
        }

        [DisplayName("S Name"), Size(50)]
        public String SName
        {
            get { return Fields.SName[this]; }
            set { Fields.SName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SCode; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssetsSeverityRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField SCode;
            public StringField SName;
        }
    }
}
