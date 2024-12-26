
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[AREAS]")]
    [DisplayName("Areas"), InstanceName("Areas")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    [LeftJoin("c", "CITY", "T0.[CITY_NO]=c.[CITY_NO]")]
    [LeftJoin("z", "ZONES", "T0.[ZONE_NO]=z.[ZONE_NO] and t0.[CITY_NO]=z.[CITY_NO]")]
    public sealed class AreasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Area Name"), Column("AREA_NAME"), Size(30), NotNull, QuickSearch]
        public String AreaName
        {
            get { return Fields.AreaName[this]; }
            set { Fields.AreaName[this] = value; }
        }


        [DisplayName("City No"), Column("CITY_NO"), Size(3), PrimaryKey]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.CityLook),AutoComplete =false)]
        public Decimal? CityNo
        {
            get { return Fields.CityNo[this]; }
            set { Fields.CityNo[this] = value; }
        }



        [DisplayName("Zone No"), Column("ZONE_NO"), Size(3), PrimaryKey]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.ZoneLook), CascadeFrom = "CityNo",CascadeField = "CityNo", AutoComplete = false)]
        public Decimal? ZoneNo
        {
            get { return Fields.ZoneNo[this]; }
            set { Fields.ZoneNo[this] = value; }
        }

        [DisplayName("Area No"), Column("AREA_NO"), Size(3), PrimaryKey]

        public Decimal? AreaNo
        {
            get { return Fields.AreaNo[this]; }
            set { Fields.AreaNo[this] = value; }
        }

       

        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }
        [DisplayName("City Name")]
        [Expression("(c.[CITY_NAME] )")]
        public string CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }

        [DisplayName("Zone Name")]
        [Expression("(z.[ZONE_NAME] )")]
        public string ZoneName
        {
            get { return Fields.ZoneName[this]; }
            set { Fields.ZoneName[this] = value; }
        }


        [DisplayName("Zone Name")]
        [Expression("(z.[ItemId] )")]
        public Int32? ZoneId
        {
            get { return Fields.ZoneId[this]; }
            set { Fields.ZoneId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AreaName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AreasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField AreaName;
            public StringField CityName;
            public StringField ZoneName;

            public Int32Field ZoneId;

            public DecimalField ZoneNo;
            public DecimalField AreaNo;
            public DecimalField CityNo;
            public Int32Field ItemId;
        }
    }
}
