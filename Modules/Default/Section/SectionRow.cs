
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[SECTIONS]")]
    [DisplayName("Section"), InstanceName("Section")]
    [ReadPermission(PermissionKeys.Apps.Configrations)]
    [ModifyPermission(PermissionKeys.Apps.Configrations)]
    public sealed class SectionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Road No"), Column("ROAD_NO"), Size(4), PrimaryKey, Updatable(false)]
        public String RoadNo
        {
            get { return Fields.RoadNo[this]; }
            set { Fields.RoadNo[this] = value; }
        }

        [DisplayName("Area No"), Column("AREA_NO"), Size(6), PrimaryKey, Updatable(false)]
        public Decimal? AreaNo
        {
            get { return Fields.AreaNo[this]; }
            set { Fields.AreaNo[this] = value; }
        }

        [DisplayName("City No"), Column("CITY_NO"), Size(2), PrimaryKey, Updatable(false)]
        public String CityNo
        {
            get { return Fields.CityNo[this]; }
            set { Fields.CityNo[this] = value; }
        }

        [DisplayName("Zone No"), Column("ZONE_NO"), Size(4), PrimaryKey, Updatable(false)]
        public String ZoneNo
        {
            get { return Fields.ZoneNo[this]; }
            set { Fields.ZoneNo[this] = value; }
        }

        [DisplayName("Section No"), Column("SECTION_NO"), Size(50), PrimaryKey, Updatable(false), QuickSearch]
        public String SectionNo
        {
            get { return Fields.SectionNo[this]; }
            set { Fields.SectionNo[this] = value; }
        }

        [DisplayName("Item Id"), Identity]
        public Int64? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Sec Name"), Size(150), Updatable(false)]
        public String SecName
        {
            get { return Fields.SecName[this]; }
            set { Fields.SecName[this] = value; }
        }

        [DisplayName("IsActive"), Size(150),Updatable(true)]
        public bool? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.ItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RoadNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SectionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField RoadNo;
            public DecimalField AreaNo;
            public StringField CityNo;
            public StringField ZoneNo;
            public StringField SectionNo;
            public Int64Field ItemId;
            public StringField SecName;
            public BooleanField IsActive;
        }
    }
}
