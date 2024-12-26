
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
    [DisplayName("Sections"), InstanceName("Sections")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class SectionsRow : Row, IIdRow
    {
        [DisplayName("Road No"), Column("ROAD_NO"), Size(3), PrimaryKey]
        public string RoadNo
        {
            get { return Fields.RoadNo[this]; }
            set { Fields.RoadNo[this] = value; }
        }

        [DisplayName("Area No"), Column("AREA_NO"), Size(3), PrimaryKey]
        public string AreaNo
        {
            get { return Fields.AreaNo[this]; }
            set { Fields.AreaNo[this] = value; }
        }

        [DisplayName("City No"), Column("CITY_NO"), Size(3), PrimaryKey]
        public string CityNo
        {
            get { return Fields.CityNo[this]; }
            set { Fields.CityNo[this] = value; }
        }

        [DisplayName("Zone No"), Column("ZONE_NO"), Size(3), PrimaryKey]
        public string ZoneNo
        {
            get { return Fields.ZoneNo[this]; }
            set { Fields.ZoneNo[this] = value; }
        }

        [DisplayName("Section No"), Column("SECTION_NO"), Size(3), PrimaryKey]
        public string SectionNo
        {
            get { return Fields.SectionNo[this]; }
            set { Fields.SectionNo[this] = value; }
        }

        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SectionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField RoadNo;
            public StringField AreaNo;
            public StringField CityNo;
            public StringField ZoneNo;
            public StringField SectionNo;
            public Int32Field ItemId;
        }
    }
}
