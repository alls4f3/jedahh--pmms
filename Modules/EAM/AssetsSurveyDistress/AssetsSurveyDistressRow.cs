
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

    [ConnectionKey("Default"), Module("EAM"), TableName("[dbo].[AssetsSurveyDistress]")]
    [DisplayName("Assets Survey Distress"), InstanceName("Assets Survey Distress")]
    [ReadPermission(PermissionKeys.Apps.Assets)]
    [ModifyPermission(PermissionKeys.Apps.Assets)]
    [InsertPermission(PermissionKeys.Apps.Assets)]
    public sealed class AssetsSurveyDistressRow : Row, IIdRow, INameRow
    {
        [DisplayName("Itemdisid"), Column("itemdisid"), Identity]
        public Int64? Itemdisid
        {
            get { return Fields.Itemdisid[this]; }
            set { Fields.Itemdisid[this] = value; }
        }

        [DisplayName("Distress Id")]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetDistressRow))]
        [Required]

        public Int32? DistressId
        {
            get { return Fields.DistressId[this]; }
            set { Fields.DistressId[this] = value; }
        }
        [Required]

        [DisplayName("Severity"), Size(50), QuickSearch]
        [LookupEditor(typeof(PMMS.EAM.Entities.AssetsSeverityRow))]
        public string Severity
        {
            get { return  Fields.Severity[this]; }
            set { Fields.Severity[this] = value; }
        }






        [Required]
        [DisplayName("Quantity")]
        public Double? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }
        [ReadOnly(true)]

        [DisplayName("Density"), Size(50)]
        public String Density
        {
            get { return Fields.Density[this]; }
            set { Fields.Density[this] = value; }
        }

        [DisplayName("Total Value")]
        [ReadOnly(true)]
        public Double? TotalValue
        {
            get { return Fields.TotalValue[this]; }
            set { Fields.TotalValue[this] = value; }
        }
        [DisplayName("Itemsuidref"), ForeignKey(typeof(AssetsSurveyRow)), LeftJoin("o")]
       
        public Int64? Itemsuidref
        {
            get { return Fields.Itemsuidref[this]; }
            set { Fields.Itemsuidref[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Itemdisid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Density; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssetsSurveyDistressRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Itemdisid;
            public Int32Field DistressId;
            public StringField Severity;
            public DoubleField Quantity;
            public StringField Density;
            public DoubleField TotalValue;
            public Int64Field Itemsuidref;
        }

        [Flags]
       public enum SeverityType
        {
            None = 1,
            H = 2,
            M = 3,
            L = 4
        }
    }
}
