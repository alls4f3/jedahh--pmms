
namespace PMMS.Default.Entities
{
    using PMMS.Northwind;
    using SereneLargeFileUpload;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ImportWizerdByEqFiles]")]
    [DisplayName("Import Wizerd By Eq Files"), InstanceName("Import Wizerd By Eq Files")]
    [ReadPermission(PermissionKeys.Apps.ImportDataEntry)]
    [ModifyPermission(PermissionKeys.Apps.ImportDataEntry)]
    [InsertPermission(PermissionKeys.Apps.ImportDataEntry)]
    public sealed class ImportWizerdByEqFilesRow : Row, IIdRow, INameRow
    {
        [DisplayName("File Name"), Size(50), QuickSearch]
        public String FileName
        {
            get { return Fields.FileName[this]; }
            set { Fields.FileName[this] = value; }
        }
        [LookupEditor(typeof(PMMS.Northwind.Lookups.ImportTypeLookIMP)), Updatable(false)]

        [DisplayName("Import Type"), Required]
        public String ImportType
        {
            get { return Fields.ImportType[this]; }
            set { Fields.ImportType[this] = value; }
        }

        [DisplayName("Import Date")]
        public DateTime? ImportDate
        {
            get { return Fields.ImportDate[this]; }
            set { Fields.ImportDate[this] = value; }
        }

        [DisplayName("Import Ref"), Size(50)]
        public String ImportRef
        {
            get { return Fields.ImportRef[this]; }
            set { Fields.ImportRef[this] = value; }
        }

        [DisplayName("Import By"), Size(50)]
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

        [DisplayName("Status"), Size(50)]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Status Message")]
        public String StatusMessage
        {
            get { return Fields.StatusMessage[this]; }
            set { Fields.StatusMessage[this] = value; }
        }

        [DisplayName("Survay Date"), Updatable(false)]
        public DateTime? SurvayDate
        {
            get { return Fields.SurvayDate[this]; }
            set { Fields.SurvayDate[this] = value; }
        }

        [DisplayName("Group Survey")]
        public Int32? GroupSurvey
        {
            get { return Fields.GroupSurvey[this]; }
            set { Fields.GroupSurvey[this] = value; }
        }
        [LargeFileUploadEditor, Updatable(false)]
        [DisplayName("Import Url"), Column("ImportURL")]
        public String ImportUrl
        {
            get { return Fields.ImportUrl[this]; }
            set { Fields.ImportUrl[this] = value; }
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

        public ImportWizerdByEqFilesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField FileName;
            public StringField ImportType;
            public DateTimeField ImportDate;
            public StringField ImportRef;
            public StringField ImportBy;
            public Int64Field ImportId;
            public StringField Status;
            public StringField StatusMessage;
            public DateTimeField SurvayDate;
            public Int32Field GroupSurvey;
            public StringField ImportUrl;
        }
    }
}
