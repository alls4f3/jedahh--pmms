
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
    [DisplayName("Zones"), InstanceName("Zones")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class ZonesRow : Row, IIdRow, INameRow
    {

        [Expression("(convert(nvarchar(max),T0.[ZONE_NO]) + '' + convert(nvarchar(max), T0.[CITY_NO]))")]
        [DisplayName("Zone ID"), Size(6),PrimaryKey]
        public long? ZoneNo
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
        public Decimal? CityNo
        {
            get { return Fields.CityNo[this]; }
            set { Fields.CityNo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ZoneNo; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ZoneName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ZonesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ZoneNo;
            public StringField ZoneName;
            public DecimalField CityNo;
        }
    }
}
