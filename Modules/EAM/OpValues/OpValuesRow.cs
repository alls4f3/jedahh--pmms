
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

    [ConnectionKey("Default"), Module("EAM"), TableName("[dbo].[OPValues]")]
    [DisplayName("Op Values"), InstanceName("Op Values")]
    [ModifyPermission(PermissionKeys.Apps.AssetsEngineer)]
    [InsertPermission(PermissionKeys.Apps.AssetsEngineer)]
    [ReadPermission(PermissionKeys.Apps.AssetsEngineer)]
    [LookupScript]

    public sealed class OpValuesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Op Values"), Size(50), PrimaryKey, QuickSearch]
        public String OpValues
        {
            get { return Fields.OpValues[this]; }
            set { Fields.OpValues[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OpValues; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OpValues; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OpValuesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField OpValues;
        }
    }
}
