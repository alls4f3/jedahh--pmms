
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

    [ConnectionKey("Default"), Module("EAM"), TableName("[dbo].[AssetBuilding]")]
    [DisplayName("Asset Building"), InstanceName("Asset Building")]
    [ReadPermission(PermissionKeys.Apps.Assets)]
    [ModifyPermission(PermissionKeys.Apps.Assets)]
    [InsertPermission(PermissionKeys.Apps.Assets)]
    [LookupScript]
    public sealed class AssetBuildingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Id"), Identity]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Item Name"), QuickSearch]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }



        [DisplayName("Serial Number")]
        public String ItemSerial
        {
            get { return Fields.ItemSerial[this]; }
            set { Fields.ItemSerial[this] = value; }
        }

        [DisplayName("City Id")]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.CityLook2))]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Item Desc")]
        public String ItemDesc
        {
            get { return Fields.ItemDesc[this]; }
            set { Fields.ItemDesc[this] = value; }
        }

        [DisplayName("Number Of Floor")]
        public Double? NumberOfFloor
        {
            get { return Fields.NumberOfFloor[this]; }
            set { Fields.NumberOfFloor[this] = value; }
        }

        [DisplayName("Lat Long"), Size(50)]
        public String LatLong
        {
            get { return Fields.LatLong[this]; }
            set { Fields.LatLong[this] = value; }
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

        public AssetBuildingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ItemId;
            public StringField ItemName;
            public Int32Field CityId;
            public StringField ItemDesc;
            public DoubleField NumberOfFloor;
            public StringField LatLong;
            public StringField ItemSerial;

            
        }
    }
}
