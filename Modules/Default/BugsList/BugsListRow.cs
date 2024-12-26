
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[BugsList]")]
    [DisplayName("Equipment List"), InstanceName("Equipment List")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class BugsListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Name"), Size(254), PrimaryKey, QuickSearch]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemName; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BugsListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField ItemName;
        }
    }
}
