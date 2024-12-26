
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

    [ConnectionKey("Default"), Module("EAM"), TableName("[dbo].[AssetsTotalCalc]")]
    [LeftJoin("AssetStatus", "AssetStatus", "T0.[ItemThen]=AssetStatus.[ItemId]")]

    [DisplayName("Assets Total Calc"), InstanceName("Assets Total Calc")]
    [ModifyPermission(PermissionKeys.Apps.AssetsEngineer)]
    [InsertPermission(PermissionKeys.Apps.AssetsEngineer)]
    [ReadPermission(PermissionKeys.Apps.AssetsEngineer)]
    public sealed class AssetsTotalCalcRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("IF"), Size(50), QuickSearch]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("<span style='color:red'>*</span>If ")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<p>If Sum of Total --> T </ p>")]
        [NotMapped]
        public string ItemName2
        {
            get { return Fields.ItemName2[this]; }
            set { Fields.ItemName2[this] = value; }
        }



        [DisplayName("Is"), Size(50)]
        [Required]
        public String ItemOp
        {
            get { return Fields.ItemOp[this]; }
            set { Fields.ItemOp[this] = value; }
        }

        [DisplayName("Item Value")]
        public Double? ItemValue
        {
            get { return Fields.ItemValue[this]; }
            set { Fields.ItemValue[this] = value; }
        }

        [DisplayName("Then")]
        [Required]

        [LookupEditor(typeof(PMMS.EAM.Entities.AssetStatusRow))]

        public Int32? ItemThen
        {
            get { return Fields.ItemThen[this]; }
            set { Fields.ItemThen[this] = value; }
        }


        [Expression("AssetStatus.[ItemName]")]
        [DisplayName("Then")]
        public string AssetStatusName
        {
            get { return Fields.AssetStatusName[this]; }
            set { Fields.AssetStatusName[this] = value; }
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

        public AssetsTotalCalcRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ItemId;
            public StringField ItemName;
            public StringField ItemName2;
            public StringField ItemOp;
            public DoubleField ItemValue;
            public Int32Field ItemThen;
            public StringField AssetStatusName;
            

        }
    }
}
