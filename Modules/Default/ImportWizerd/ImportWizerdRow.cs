
namespace PMMS.Default.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using PMMS.Northwind;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ImportWizerd]")]
    [DisplayName("Import Wizerd"), InstanceName("Import Wizerd")]
    [ReadPermission(PermissionKeys.Apps.DataEntry)]
    [ModifyPermission(PermissionKeys.Apps.DataEntry)]
   
    public sealed class ImportWizerdRow : Row, IIdRow, INameRow
    {
        [DisplayName("File Name"), Size(10), NotNull, QuickSearch]
        public String FileName
        {
            get { return Fields.FileName[this]; }
            set { Fields.FileName[this] = value; }
        }

        [DisplayName("Import Type"), Size(10)]
        public String ImportType
        {
            get { return Fields.ImportType[this]; }
            set { Fields.ImportType[this] = value; }
        }

        [DisplayName("Import Date"), Size(10)]
        public String ImportDate
        {
            get { return Fields.ImportDate[this]; }
            set { Fields.ImportDate[this] = value; }
        }

        [DisplayName("Import Ref"), Size(10)]
        public String ImportRef
        {
            get { return Fields.ImportRef[this]; }
            set { Fields.ImportRef[this] = value; }
        }

        [DisplayName("Import By"), Size(10)]
        public String ImportBy
        {
            get { return Fields.ImportBy[this]; }
            set { Fields.ImportBy[this] = value; }
        }

        [DisplayName("Import Id"), Identity]
        public Int64? ImportId
        {
            get { return Fields.ImportId[this]; }
            set { Fields.ImportId[this] = value; }
        }

        [DisplayName("Content Url"), Column("ContentURL")]
        public String ContentUrl
        {
            get { return Fields.ContentUrl[this]; }
            set { Fields.ContentUrl[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImportId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FileName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportWizerdRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField FileName;
            public StringField ImportType;
            public StringField ImportDate;
            public StringField ImportRef;
            public StringField ImportBy;
            public Int64Field ImportId;
            public StringField ContentUrl;
        }
    }
}
