
namespace PMMS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ImportType]")]
    [DisplayName("Import Type"), InstanceName("Import Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ImportTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Type Id"), Identity]
        public Int32? TypeId
        {
            get { return Fields.TypeId[this]; }
            set { Fields.TypeId[this] = value; }
        }

        [DisplayName("Type Name"), Size(50), QuickSearch]
        public String TypeName
        {
            get { return Fields.TypeName[this]; }
            set { Fields.TypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TypeId;
            public StringField TypeName;
        }
    }
}
