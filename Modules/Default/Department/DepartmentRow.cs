
namespace PMMS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Department]")]
    [DisplayName("Department"), InstanceName("Department")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class DepartmentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Department Id"), PrimaryKey]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("Department Name"), Size(250), NotNull, QuickSearch]
        public String DepartmentName
        {
            get { return Fields.DepartmentName[this]; }
            set { Fields.DepartmentName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DepartmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DepartmentName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DepartmentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DepartmentId;
            public StringField DepartmentName;
        }
    }
}
