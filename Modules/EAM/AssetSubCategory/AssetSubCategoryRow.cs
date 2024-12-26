
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

    [ConnectionKey("Default"), Module("EAM"), TableName("[dbo].[AssetSubCategory]")]
    [DisplayName("Asset Sub Category"), InstanceName("Asset Sub Category")]
    [ReadPermission(PermissionKeys.Apps.Assets)]
    [ModifyPermission(PermissionKeys.Apps.Assets)]
    [InsertPermission(PermissionKeys.Apps.Assets)]
    [LookupScript]

    public sealed class AssetSubCategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Item Name"), QuickSearch, Required]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Parent Id"),Required, ForeignKey("AssetCategory", "ItemId"), LookupInclude]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetCategoryRow))]

        public Int32? ParentId
        {
            get { return Fields.ParentId[this]; }
            set { Fields.ParentId[this] = value; }
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

        public AssetSubCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ItemId;
            public StringField ItemName;
            public Int32Field ParentId;
        }
    }
}
