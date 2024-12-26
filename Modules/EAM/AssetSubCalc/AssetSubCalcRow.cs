
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

    [ConnectionKey("Default"), Module("EAM"), TableName("[dbo].[AssetSubCalc]")]
    [DisplayName("Asset Sub Calc"), InstanceName("Asset Sub Calc")]
    [ModifyPermission(PermissionKeys.Apps.AssetsEngineer)]
    [InsertPermission(PermissionKeys.Apps.AssetsEngineer)]
    [ReadPermission(PermissionKeys.Apps.AssetsEngineer)]
    public sealed class AssetSubCalcRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }


        [DisplayName("Severity"), Size(50), QuickSearch]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetsSeverityRow))]
        [Required]

        public String Sid
        {
            get { return Fields.Sid[this]; }
            set { Fields.Sid[this] = value; }
        }

        [DisplayName("Distress Id")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetDistressRow))]
        [Required]
        public Int32? DisId
        {
            get { return Fields.DisId[this]; }
            set { Fields.DisId[this] = value; }
        }

        [DisplayName("Density")]
        [Required]

        public String Density
        {
            get { return Fields.Density[this]; }
            set { Fields.Density[this] = value; }
        }

        [DisplayName("Total Value")]
        [Required]

        public String TotalValue
        {
            get { return Fields.TotalValue[this]; }
            set { Fields.TotalValue[this] = value; }
        }


        [DisplayName("<span style='color:red'>*</span>Formula Notes ")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<p>Asset Width  AW <br/>Asset Hight  AH <br/>Asset Area  AA<br/>Quantity    Q<br/>Density     D </ p>")]
        [NotMapped]
        public string Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Sid; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssetSubCalcRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ItemId;
            public StringField Sid;
            public Int32Field DisId;
            public StringField Density;
            public StringField TotalValue;
            public StringField Notes;
        }
    }
}
