
namespace PMMS.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using Northwind;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[GisLayerConnections]")]
    [DisplayName("Gis Layer Connections"), InstanceName("Gis Layer Connections")]
    [ReadPermission(PermissionKeys.Apps.GISCreator)]
    [ModifyPermission(PermissionKeys.Apps.GISCreator)]
    public sealed class GisLayerConnectionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Gis Page Name"), Column("GISPageName"), Size(50), QuickSearch,Required]
        public String GisPageName
        {
            get { return Fields.GisPageName[this]; }
            set { Fields.GisPageName[this] = value; }
        }

        [DisplayName("Gis Page Content"), Column("GISPageContent")]
        [FileUploadEditor]
        public String GisPageContent
        {
            get { return Fields.GisPageContent[this]; }
            set { Fields.GisPageContent[this] = value; }
        }

        [DisplayName("Gis Page Sorting"), Column("GISPageSorting")]
        public Int32? GisPageSorting
        {
            get { return Fields.GisPageSorting[this]; }
            set { Fields.GisPageSorting[this] = value; }
        }

        [DisplayName("Gis Page Id"), Column("GISPageID"), Identity]
        public Int32? GisPageId
        {
            get { return Fields.GisPageId[this]; }
            set { Fields.GisPageId[this] = value; }
        }

        [DisplayName("Gisurl Name"), Column("GISURLName"), Size(50)]
        public String GisurlName
        {
            get { return Fields.GisurlName[this]; }
            set { Fields.GisurlName[this] = value; }
        }


        [DisplayName("FolderName"), Column("FolderName"), Size(50)]
        public String FolderName
        {
            get { return Fields.FolderName[this]; }
            set { Fields.FolderName[this] = value; }
        }

        [DisplayName("Is Publish")]
        public Boolean? IsPublish
        {
            get { return Fields.IsPublish[this]; }
            set { Fields.IsPublish[this] = value; }
        }


        [DisplayName("Users")]
        public string ReportUsers
        {
            get { return Fields.ReportUsers[this]; }
            set { Fields.ReportUsers[this] = value; }
        }



        [DisplayName("Groups")]
        public string ReportGroups
        {
            get { return Fields.ReportGroups[this]; }
            set { Fields.ReportGroups[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.GisPageId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.GisPageName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GisLayerConnectionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField GisPageName;
            public StringField GisPageContent;
            public Int32Field GisPageSorting;
            public Int32Field GisPageId;
            public StringField GisurlName;
            public BooleanField IsPublish;
            public StringField FolderName;
            public StringField ReportUsers;
            public StringField ReportGroups;

        }
    }
}
