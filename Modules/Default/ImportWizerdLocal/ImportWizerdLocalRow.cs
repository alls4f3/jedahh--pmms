
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
    using SereneLargeFileUpload;
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ImportWizerdLocal]")]
    [DisplayName("Import Wizerd Local"), InstanceName("Import Wizerd Local")]
    [ReadPermission(PermissionKeys.Apps.ImportDataEntry)]
    [ModifyPermission(PermissionKeys.Apps.ImportDataEntry)]
    [InsertPermission(PermissionKeys.Apps.ImportDataEntry)]
    [LeftJoin("c", "ImportType", "T0.[ImportType]=c.[TypeId]")]
    public sealed class ImportWizerdLocalRow : Row, IIdRow, INameRow
    {
        [DisplayName("File Name"), Size(50), QuickSearch, Updatable(false)]
        public String FileName
        {
            get { return Fields.FileName[this]; }
            set { Fields.FileName[this] = value; }
        }


        [DisplayName("Status"), Size(50), Updatable(true)]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }



        [DisplayName("Ref Message"), Updatable(true), HideOnInsert(true)]
        public String StatusMessage
        {
            get { return Fields.StatusMessage[this]; }
            set { Fields.StatusMessage[this] = value; }
        }


        [DisplayName("Survay Date"), Required, QuickSearch, Updatable(false)]
        public DateTime? SurvayDate
        {
            get { return Fields.SurvayDate[this]; }
            set { Fields.SurvayDate[this] = value; }
        }


        [DisplayName("Import Type"), Size(50), Required]
        [LookupEditor(typeof(PMMS.Northwind.Lookups.ImportTypeLook)), Updatable(false)]
        public String ImportType
        {
            get { return Fields.ImportType[this]; }
            set { Fields.ImportType[this] = value; }
        }

        [DisplayName("Import Date"), ReadOnly(true), Updatable(false)]
        public DateTime? ImportDate
        {
            get { return Fields.ImportDate[this]; }
            set { Fields.ImportDate[this] = value; }
        }

        [DisplayName("Import Ref"), Size(50), ReadOnly(true), Updatable(false)]
        public String ImportRef
        {
            get { return Fields.ImportRef[this]; }
            set { Fields.ImportRef[this] = value; }
        }

        [DisplayName("Import By"), Size(50), ReadOnly(true), Updatable(false)]
        public String ImportBy
        {
            get { return Fields.ImportBy[this]; }
            set { Fields.ImportBy[this] = value; }
        }

        [DisplayName("Import Id"), PrimaryKey, Identity]
        public Int64? ImportId
        {
            get { return Fields.ImportId[this]; }
            set { Fields.ImportId[this] = value; }
        }

        [LargeFileUploadEditor]
        [DisplayName(" DISTRESS "), Column("ContentURL"), Required]
        //[MultipleFileUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = true,JsonEncodeValue =true)]
        //[MultipleFileUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = true,JsonEncodeValue =true)]
        public String ContentUrl
        {
            get { return Fields.ContentUrl[this]; }
            set { Fields.ContentUrl[this] = value; }
        }


        [DisplayName("FWD - EQ "), Column("ContentUrlFWD")]
        [MultipleFileUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = true)]
        public String ContentUrlFWD
        {
            get { return Fields.ContentUrlFWD[this]; }
            set { Fields.ContentUrlFWD[this] = value; }
        }


        [DisplayName("IRI -EQ "), Column("ContentUrlIRI")]
        [MultipleFileUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = true)]
        public String ContentUrlIRI
        {
            get { return Fields.ContentUrlIRI[this]; }
            set { Fields.ContentUrlIRI[this] = value; }
        }


        [DisplayName("SKID - EQ "), Column("ContentUrlSKID")]
        [MultipleFileUploadEditor(FilenameFormat = "Person/GalleryImages/~", AllowNonImage = true)]
        public String ContentUrlSKID
        {
            get { return Fields.ContentUrlSKID[this]; }
            set { Fields.ContentUrlSKID[this] = value; }
        }


        [DisplayName("Import Type")]
        [Expression("(c.[TypeName] )")]
        public string TypeName
        {
            get { return Fields.TypeName[this]; }
            set { Fields.TypeName[this] = value; }
        }


        [DisplayName("Workflow History")]
        [StaticTextBlock(HideLabel = false, IsHtml = true, IsLocalText = false, Text = "<div id='mappingHistory'></div>")]
        [NotMapped]
        public string WorkflowHis
        {
            get { return Fields.WorkflowHis[this]; }
            set { Fields.WorkflowHis[this] = value; }
        }



        [DisplayName("Street No"), Updatable(false), HideOnInsert(true)]
        public String DisplayStreet
        {
            get { return Fields.DisplayStreet[this]; }
            set { Fields.DisplayStreet[this] = value; }
        }


        [DisplayName("Lane"), Updatable(false), HideOnInsert(true)]
        public String DisplayLane
        {
            get { return Fields.DisplayLane[this]; }
            set { Fields.DisplayLane[this] = value; }
        }

        [DisplayName("Area"), Updatable(false), HideOnInsert(true)]
        public String DisplayArea
        {
            get { return Fields.DisplayArea[this]; }
            set { Fields.DisplayArea[this] = value; }
        }


        [DisplayName("City"), Updatable(false), HideOnInsert(true)]
        public String DisplayCity
        {
            get { return Fields.DisplayCity[this]; }
            set { Fields.DisplayCity[this] = value; }
        }


        [DisplayName("Section"), Updatable(false), HideOnInsert(true)]
        public String DisplaySection
        {
            get { return Fields.DisplaySection[this]; }
            set { Fields.DisplaySection[this] = value; }
        }


        [DisplayName("Street Name"), Updatable(false), HideOnInsert(true)]
        public String DisplayStreetName
        {
            get { return Fields.DisplayStreetName[this]; }
            set { Fields.DisplayStreetName[this] = value; }
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

        public ImportWizerdLocalRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField FileName;
            public DateTimeField SurvayDate;

            public StringField ImportType;
            public DateTimeField ImportDate;
            public StringField ImportRef;
            public StringField ImportBy;
            public Int64Field ImportId;
            public StringField ContentUrl;
            public StringField ContentUrlFWD;
            public StringField ContentUrlIRI;
            public StringField ContentUrlSKID;

            public StringField TypeName;
            public StringField Status;
            public StringField StatusMessage;

            public StringField WorkflowHis;
            public StringField DisplayStreet;
            public StringField DisplayArea;
            public StringField DisplayCity;
            public StringField DisplaySection;
            public StringField DisplayStreetName;
            public StringField DisplayLane;






        }
    }
}
