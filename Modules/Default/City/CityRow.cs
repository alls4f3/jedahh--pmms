
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

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CITY]")]
    [DisplayName("City"), InstanceName("City")]
    [ReadPermission(PermissionKeys.Apps.RelatedData)]
    [ModifyPermission(PermissionKeys.Apps.RelatedData)]
    public sealed class CityRow : Row, IIdRow, INameRow
    {
        [DisplayName("No"), Column("CITY_NO"), Size(3), PrimaryKey]
        public String No
        {
            get { return Fields.No[this]; }
            set { Fields.No[this] = value; }
        }


        [DisplayName("City"), Column("CITYID"), Size(3), PrimaryKey]
        public Int32? CITY_ID
        {
            get { return Fields.CITY_ID[this]; }
            set { Fields.CITY_ID[this] = value; }
        }


        

        [DisplayName("Name"), Column("CITY_NAME"), Size(30), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

    
        IIdField IIdRow.IdField
        {
            get { return Fields.No; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CityRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField No;
            public StringField Name;
            public Int32Field CITY_ID;
            
        }
    }
}
