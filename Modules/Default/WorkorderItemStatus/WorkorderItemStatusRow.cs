
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[WorkorderItemStatus]")]
    [DisplayName("Workorder Item Status"), InstanceName("Workorder Item Status")]
    [ReadPermission(PermissionKeys.Apps.Configrations)]
    [ModifyPermission(PermissionKeys.Apps.Configrations)]

    [LookupScript]
    public sealed class WorkorderItemStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Item Name"), QuickSearch]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Is Closed")]
        public Boolean? IsClosed
        {
            get { return Fields.IsClosed[this]; }
            set { Fields.IsClosed[this] = value; }
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

        public WorkorderItemStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ItemId;
            public StringField ItemName;
            public BooleanField IsClosed;
        }
    }
}
