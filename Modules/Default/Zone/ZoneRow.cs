
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ZONES]")]
    [DisplayName("Zone"), InstanceName("Zone")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    [LeftJoin("c", "CITY", "T0.[CITY_NO]=c.[CITY_NO]")]
    public sealed class ZoneRow : Row, IIdRow, INameRow
    {
        [DisplayName("Zone No"), Column("ZONE_NO"), Size(3), PrimaryKey]
        public Decimal? ZoneNo
        {
            get { return Fields.ZoneNo[this]; }
            set { Fields.ZoneNo[this] = value; }
        }

        [DisplayName("Zone Name"), Column("ZONE_NAME"), Size(30), NotNull, QuickSearch]
        public String ZoneName
        {
            get { return Fields.ZoneName[this]; }
            set { Fields.ZoneName[this] = value; }
        }

        [DisplayName("City No"), Column("CITY_NO"), Size(3)]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.CityLook))]
        public Decimal? CityNo
        {
            get { return Fields.CityNo[this]; }
            set { Fields.CityNo[this] = value; }
        }


        [DisplayName("City Name")]
        [Expression("(c.[CITY_NAME] )")]
        public string CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }


        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("I")]
        [Expression("(T0.[Itemid] )")]
        public Int32? ZoneId
        {
            get { return Fields.ZoneId[this]; }
            set { Fields.ZoneId[this] = value; }
        }


        //[DisplayName("Employee"), ForeignKey(typeof(EmployeeRow)), LeftJoin("e")]
        //[LookupEditor(typeof(EmployeeRow)), TextualField("EmployeeFullName")]
        //public Int32? EmployeeID
        //{
        //    get { return Fields.EmployeeID[this]; }
        //    set { Fields.EmployeeID[this] = value; }
        //}


        IIdField IIdRow.IdField
        {
            get { return Fields.ItemId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ZoneName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ZoneRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public DecimalField ZoneNo;
            public StringField ZoneName;
            public StringField CityName;
            public DecimalField CityNo;
            public Int32Field ItemId;
            public Int32Field ZoneId;

        }
    }
}
