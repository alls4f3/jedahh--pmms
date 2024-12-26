
namespace PMMS.Distortion.Entities
{
    using PMMS.Northwind;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Distortion"), TableName("[dbo].[ContentHubCategory]")]
    [DisplayName("Content Hub Category"), InstanceName("Content Hub Category")]
    [ReadPermission(PermissionKeys.Apps.Distortion)]
    [ModifyPermission(PermissionKeys.Apps.Distortion)]
    [InsertPermission(PermissionKeys.Apps.Distortion)]
    [LookupScript]
    public sealed class ContentHubCategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Item Name"), Size(100), QuickSearch]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ContentHubCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ItemId;
            public StringField ItemName;
        }
    }
}
