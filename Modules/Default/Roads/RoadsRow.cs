
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ROADS]")]
    [DisplayName("Roads"), InstanceName("Roads")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    [LeftJoin("c", "CITY", "T0.[CITY_NO]=c.[CITY_NO]")]
    [LeftJoin("z", "ZONES", "T0.[ZONE_NO]=z.[ZONE_NO] and t0.[CITY_NO]=z.[CITY_NO]")]
    [LeftJoin("A", "AREAS", "T0.[AREA_NO]=A.[AREA_NO] and T0.[CITY_NO]=A.[CITY_NO] and T0.[ZONE_NO]=A.[ZONE_NO]")]


    public sealed class RoadsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Road No"), Column("ROAD_NO"), NotNull, Size(5), PrimaryKey,ReadOnly(true),Updatable(false)]
        public String RoadNo
        {
            get { return Fields.RoadNo[this]; }
            set { Fields.RoadNo[this] = value; }
        }

        [DisplayName("Road Name"), Column("ROAD_NAME"), Size(30), NotNull, QuickSearch, ReadOnly(true), Updatable(false)]
        public String RoadName
        {
            get { return Fields.RoadName[this]; }
            set { Fields.RoadName[this] = value; }
        }

        [DisplayName("Area No"), Column("AREA_NO"), Size(3), PrimaryKey]

        //[LookupEditor(typeof(PMMS.Northwind.Lookups.AreaLook), CascadeFrom = "ZoneNo",  FilterValue   = "ZoneId",CascadeField  = "ZoneId", AutoComplete = false)]
        public String AreaNo
        {
            get { return Fields.AreaNo[this]; }
            set { Fields.AreaNo[this] = value; }
        }

        [DisplayName("<span style='color:red'>*</span>Area No ")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='area' style='width: 100%;'> <option value='volvo'>Volvo</option> <option value='volvo'>Volvo</option> </select>")]
        [Expression("(c.[CITY_NAME] )")]
        public string AreaNoTemplate
        {
            get { return Fields.AreaNoTemplate[this]; }
            set { Fields.AreaNoTemplate[this] = value; }
        }


        [DisplayName("<span style='color:red'>*</span> Zone No")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='zoneSelect' style='width: 100%;'> <option value='volvo'>Volvo</option> <option value='volvo'>Volvo</option> </select>")]
        [Expression("(c.[CITY_NAME])")]
        public string ZoneNoTemplate
        {
            get { return Fields.ZoneNoTemplate[this]; }
            set { Fields.ZoneNoTemplate[this] = value; }
        }


        [DisplayName("<span style='color:red'>*</span>City No")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<select id='citySelect' style='width: 100%;'> <option value='volvo'>Volvo</option> <option value='volvo'>Volvo</option> </select>")]
        [Expression("(c.[CITY_NAME])")]
        public string CityNoTemplate
        {
            get { return Fields.CityNoTemplate[this]; }
            set { Fields.CityNoTemplate[this] = value; }
        }


        [DisplayName("Road Type"), Column("ROAD_TYPE"), NotNull, Size(2)]
        public Decimal? RoadType
        {
            get { return Fields.RoadType[this]; }
            set { Fields.RoadType[this] = value; }
        }

        [DisplayName("City No"), Column("CITY_NO"), Size(3), PrimaryKey]
        //[LookupInclude,LookupEditor(typeof(PMMS.Northwind.Lookups.CityLook), AutoComplete = false)]
        public String CityNo
        {
            get { return Fields.CityNo[this]; }
            set { Fields.CityNo[this] = value; }
        }

        [DisplayName("Zone No"), Column("ZONE_NO"), Size(3), PrimaryKey]
        //[LookupInclude,LookupEditor(typeof(PMMS.Northwind.Lookups.ZoneLook), CascadeFrom = "CityNo", CascadeField = "CityNo", AutoComplete = false)]

        public String ZoneNo
        {
            get { return Fields.ZoneNo[this]; }
            set { Fields.ZoneNo[this] = value; }
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

        [DisplayName("Area Name")]
        [Expression("(A.[AREA_NAME] )")]

        public string AreaName
        {
            get { return Fields.AreaName[this]; }
            set { Fields.AreaName[this] = value; }
        }


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
            get { return Fields.RoadName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RoadsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
           

            public StringField RoadNo;
            public StringField RoadName;
            public StringField AreaNo;
            public DecimalField RoadType;
            public StringField CityNo;
            public StringField ZoneNo;
            public Int32Field ItemId;
            public StringField AreaName;
            public StringField CityName;
            public StringField ZoneName;
            public StringField AreaNoTemplate;
            public StringField CityNoTemplate;
            public StringField ZoneNoTemplate;
            public BooleanField IsActive;

            


        }
    }
}
