
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

    [ConnectionKey("Default"), Module("EAM"), TableName("[dbo].[AssetCustAttr]")]
    [DisplayName("Asset Cust Attr"), InstanceName("Asset Cust Attr")]
    [ReadPermission(PermissionKeys.Apps.Assets)]
    [ModifyPermission(PermissionKeys.Apps.Assets)]
    [InsertPermission(PermissionKeys.Apps.Assets)]
    public sealed class AssetCustAttrRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Sub Id"), Identity]
        public Int64? ItemSubId
        {
            get { return Fields.ItemSubId[this]; }
            set { Fields.ItemSubId[this] = value; }
        }

        [DisplayName("Asset Id"), ForeignKey(typeof(AssetsRow)), LeftJoin("o")]

        public Int64? AssetId
        {
            get { return Fields.AssetId[this]; }
            set { Fields.AssetId[this] = value; }
        }

        //[DisplayName("Attr Id")]
        [DisplayName("Attr"), ForeignKey(typeof(AssetAttrRow)), LeftJoin("p"), Required]

        [LookupEditor(typeof(PMMS.EAM.Entities.AssetAttrRow))]

        public Int32? AttrId
        {
            get { return Fields.AttrId[this]; }
            set { Fields.AttrId[this] = value; }
        }

        [DisplayName("Attr Value"), QuickSearch, Required]
        public String AttrValue
        {
            get { return Fields.AttrValue[this]; }
            set { Fields.AttrValue[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemSubId; }
        }
        //[DisplayName("Attr Name")]
        //[Expression("c.[ItemName]")]

        //[DisplayName("Product"), PrimaryKey, NotNull, ForeignKey(typeof(asset)), LeftJoin("p")]

        //public string AttrName
        //{
        //    get { return Fields.AttrName[this]; }
        //    set { Fields.AttrName[this] = value; }
        //}


        [Origin("p", "ItemName"), MinSelectLevel(SelectLevel.List)]
        public string AttrName
        {
            get { return Fields.AttrName[this]; }
            set { Fields.AttrName[this] = value; }
        }



        StringField INameRow.NameField
        {
            get { return Fields.AttrValue; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssetCustAttrRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ItemSubId;
            public Int64Field AssetId;
            public Int32Field AttrId;
            public StringField AttrValue;
            public StringField AttrName;
        }
    }
}
